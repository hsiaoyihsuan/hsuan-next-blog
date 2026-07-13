import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/app/_lib/articles";
import { MarkdownContent } from "@/app/articles/[slug]/_components/markdown-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Hsuan Tech Blog`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <article className="mx-auto max-w-3xl px-5 pt-8 md:px-8 md:pt-16">
        <header className="border-b border-neutral-200 pb-2">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-semibold text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
            {article.title}
          </h1>

          <div className="mt-5 text-sm font-medium text-neutral-500">
            <time dateTime={article.date}>{article.date}</time>
          </div>

        </header>

        <MarkdownContent content={article.content} />
      </article>
    </main>
  );
}
