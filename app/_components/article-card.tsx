import type { MarkdownArticleMeta } from "@/app/_lib/articles";
import Link from "next/link";

const DEFAULT_COVER_IMAGE = "/images/articles/default/default-article-cover.png";

type ArticleCardProps = {
  article: MarkdownArticleMeta;
  compact?: boolean;
};

function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  const coverImage = article.coverImage ?? DEFAULT_COVER_IMAGE;
  const isSvgCover = coverImage.endsWith(".svg");
  const coverStyle = {
    backgroundColor: isSvgCover
      ? (article.coverImageBackground ?? "#f5f5f5")
      : undefined,
    backgroundImage: `url(${coverImage})`,
    backgroundPosition: article.coverImagePosition ?? "center",
    backgroundSize: isSvgCover ? "contain" : "cover",
  };

  return (
    <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/articles/${article.slug}`}
        prefetch={false}
        className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
      >
        <div className="relative aspect-2/1 bg-neutral-200">
          {article.coverImage ? (
            <div
              role="img"
              aria-label={`Cover image for ${article.title}`}
              className="h-full w-full bg-no-repeat"
              style={coverStyle}
            />
          ) : (
            <div
              role="img"
              aria-label={`Default cover image for ${article.title}`}
              className="h-full w-full bg-no-repeat"
              style={coverStyle}
            />
          )}
        </div>
        <div className="space-y-4 p-5">
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-snug text-neutral-950 transition-colors group-hover:text-neutral-600">
              {article.title}
            </h3>
            {!compact && (
              <p className="text-sm leading-6 text-neutral-600">
                {article.excerpt}
              </p>
            )}
          </div>
          <div className="text-sm font-medium text-neutral-500">
            <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
