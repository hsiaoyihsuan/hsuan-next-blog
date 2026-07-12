import { ArticleCard } from "@/app/_components/article-card";
import { Pagination } from "@/app/_components/pagination";
import { getAllArticleMetas } from "@/app/_lib/articles";
import Image from "next/image";
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
  searchParams: Promise<{page?: string | string[]}>;
}) {
  const articles = await getAllArticleMetas();
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const {page} = await searchParams;
  const currentPage = parsePage(page, totalPages);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const latestArticles = articles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-6 md:gap-10 md:px-8 md:pt-14">
        <div className="relative h-[310px] overflow-hidden rounded-lg border border-neutral-200 bg-stone-100 shadow-sm sm:h-[270px] md:h-auto md:aspect-[3/1]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f1e5_0%,#f5f5f4_48%,#e7eef0_100%)]" />
          <div className="absolute inset-x-6 bottom-6 z-10 max-w-[min(34rem,calc(100%-2rem))] md:inset-x-8 md:bottom-8">
            <h1 className="max-w-3xl font-semibold leading-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl">
              The Tavern of Code
            </h1>
            <p className="mt-3 text-base font-semibold text-neutral-700 md:text-lg">
              Personal Tech Blog
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Stories about software, architecture, and engineering adventures.
            </p>
          </div>

          <div className="absolute right-0 top-1 h-[170px] w-[170px] sm:right-4 sm:top-2 sm:h-[200px] sm:w-[200px] md:right-0 md:top-1 md:h-[230px] md:w-[230px] lg:bottom-3 lg:right-8 lg:top-auto lg:h-[320px] lg:w-[320px]">
            <Image
              src="/images/home/spellblade.png"
              alt="Pixel art spellblade character holding a sword and red flame"
              fill
              priority
              unoptimized
              sizes="(min-width: 768px) 200px, (min-width: 640px) 200px, 170px"
              className="object-contain"
              style={{imageRendering: "pixelated"}}
            />
          </div>
        </div>

        <section aria-labelledby="latest-articles" className="space-y-5">
          <div className="flex items-end justify-between border-b border-neutral-200 pb-3">
            <h2
              id="latest-articles"
              className="text-2xl font-semibold text-neutral-950">
              Latest Articles
            </h2>
            <Link
              href="/archive"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-950">
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
