import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type MarkdownArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
};

export type MarkdownArticle = MarkdownArticleMeta & {
  content: string;
};

type ArticleFrontmatter = {
  title?: unknown;
  date?: unknown;
  excerpt?: unknown;
  tags?: unknown;
  coverImage?: unknown;
};

function assertString(value: unknown, fieldName: string, slug: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Article "${slug}" is missing a valid "${fieldName}" field.`);
  }

  return value;
}

function assertStringArray(value: unknown, fieldName: string, slug: string) {
  if (
    !Array.isArray(value) ||
    value.some((item) => typeof item !== "string" || item.trim() === "")
  ) {
    throw new Error(`Article "${slug}" is missing a valid "${fieldName}" field.`);
  }

  return value;
}

function parseArticle(slug: string, fileContent: string): MarkdownArticle {
  const { content, data } = matter(fileContent);
  const frontmatter = data as ArticleFrontmatter;
  const coverImage =
    typeof frontmatter.coverImage === "string" && frontmatter.coverImage.trim()
      ? frontmatter.coverImage
      : undefined;

  return {
    slug,
    title: assertString(frontmatter.title, "title", slug),
    date: assertString(frontmatter.date, "date", slug),
    excerpt: assertString(frontmatter.excerpt, "excerpt", slug),
    tags: assertStringArray(frontmatter.tags, "tags", slug),
    coverImage,
    content,
  };
}

async function readArticleFile(slug: string) {
  const articlePath = path.join(articlesDirectory, slug, "index.md");

  return readFile(articlePath, "utf8");
}

export async function getArticleBySlug(slug: string) {
  try {
    const fileContent = await readArticleFile(slug);

    return parseArticle(slug, fileContent);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function getAllArticleSlugs() {
  const entries = await readdir(articlesDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export async function getAllArticleMetas() {
  const slugs = await getAllArticleSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticleBySlug(slug);

      if (!article) {
        throw new Error(`Article "${slug}" could not be loaded.`);
      }

      return {
        slug: article.slug,
        title: article.title,
        date: article.date,
        excerpt: article.excerpt,
        tags: article.tags,
        coverImage: article.coverImage,
      };
    }),
  );

  return articles.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );
}
