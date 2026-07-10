import type { MarkdownArticleMeta } from "@/app/_lib/articles";
import Link from "next/link";

type ArchiveListProps = {
  articles: MarkdownArticleMeta[];
};

type ArticleGroup = {
  year: number;
  articles: MarkdownArticleMeta[];
};

function getTimestamp(date: string) {
  return new Date(date).getTime();
}

function groupArticlesByYear(articles: MarkdownArticleMeta[]): ArticleGroup[] {
  const sortedArticles = [...articles].sort(
    (first, second) => getTimestamp(second.date) - getTimestamp(first.date),
  );
  const groups = new Map<number, MarkdownArticleMeta[]>();

  for (const article of sortedArticles) {
    const year = new Date(article.date).getUTCFullYear();
    const yearArticles = groups.get(year) ?? [];

    yearArticles.push(article);
    groups.set(year, yearArticles);
  }

  return Array.from(groups, ([year, yearArticles]) => ({
    year,
    articles: yearArticles,
  }));
}

function formatShortDate(date: string) {
  const parsedDate = new Date(date);
  const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getUTCDate()).padStart(2, "0");

  return `${month}/${day}`;
}

function formatMachineDate(date: string) {
  const parsedDate = new Date(date);
  const year = parsedDate.getUTCFullYear();
  const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function ArchiveList({ articles }: ArchiveListProps) {
  const articleGroups = groupArticlesByYear(articles);

  return (
    <div className="space-y-10 md:space-y-14">
      {articleGroups.map((group) => (
        <section key={group.year} aria-labelledby={`articles-${group.year}`}>
          <h2
            id={`articles-${group.year}`}
            className="border-b border-neutral-200 pb-4 text-2xl font-semibold text-neutral-950 md:text-3xl"
          >
            {group.year}
          </h2>

          <div className="divide-y divide-neutral-200 border-b border-neutral-200">
            {group.articles.map((article) => (
              <article key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  prefetch={false}
                  className="group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-5 transition-colors hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-6 md:px-3 md:py-6"
                >
                  <time
                    dateTime={formatMachineDate(article.date)}
                    className="pt-0.5 font-mono text-sm text-neutral-500"
                  >
                    {formatShortDate(article.date)}
                  </time>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug text-neutral-950 transition-colors group-hover:text-neutral-600 md:text-lg">
                      {article.title}
                    </h3>
                    {article.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-neutral-200/70 px-2.5 py-1 text-xs font-medium text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
