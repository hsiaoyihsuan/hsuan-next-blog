import { ArticleCard } from "@/app/_components/article-card";
import { Pagination } from "@/app/_components/pagination";
import { SpriteImage } from "@/app/_components/sprite-image";
import { articles } from "@/app/_data/articles";
import Link from "next/link";

const ARTICLES_PER_PAGE = 9;

function parsePage(page: string | string[] | undefined, totalPages: number) {
  const pageValue = Array.isArray(page) ? page[0] : page;
  const parsedPage = Number(pageValue ?? 1);

  if (!Number.isInteger(parsedPage) || parsedPage < 1) {
    return 1;
  }

  return Math.min(parsedPage, totalPages);
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const { page } = await searchParams;
  const currentPage = parsePage(page, totalPages);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const latestArticles = articles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-6 md:gap-10 md:px-8 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[280px_1fr] md:items-end md:gap-6">
          <div className="relative aspect-5/4 overflow-hidden rounded-lg bg-neutral-200 shadow-sm md:aspect-square">
            <SpriteImage
              alt="Portrait of Hsuan"
              position="left top"
              className="h-full w-full"
            />
          </div>

          <div className="border-b border-neutral-200 pb-8 md:pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Personal Tech Blog
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-neutral-950 md:text-6xl">
              Notes on building thoughtful software.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 md:mt-5 md:text-lg">
              I write about frontend engineering, AI-assisted development,
              product craft, and the small decisions that make systems easier to
              maintain.
            </p>
          </div>
        </div>

        <section aria-labelledby="latest-articles" className="space-y-5">
          <div className="flex items-end justify-between border-b border-neutral-200 pb-3">
            <h2
              id="latest-articles"
              className="text-2xl font-semibold text-neutral-950"
            >
              Latest Articles
            </h2>
            <Link
              href="/archive"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-950"
            >
              View all
            </Link>
          </div>

          <div className="space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} compact />
              ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </section>
      </section>
    </main>
  );
}
