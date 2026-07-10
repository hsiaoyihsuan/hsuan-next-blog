import { SpriteImage } from "@/app/_components/sprite-image";
import type { Article } from "@/app/_data/articles";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
  compact?: boolean;
};

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/articles/${article.slug}`}
        prefetch={false}
        className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
      >
        <div className="relative aspect-4/3 bg-neutral-200">
          <SpriteImage
            alt={article.alt}
            position={article.imagePosition}
            className="h-full w-full"
          />
        </div>
        <div className="space-y-4 p-5">
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
            <time>{article.date}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
