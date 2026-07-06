import { ArticleCard } from "@/app/_components/article-card";
import { articles } from "@/app/_data/articles";

export default function Archive() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-6 md:gap-10 md:px-8 md:pt-14">
        <div className="border-b border-neutral-200 pb-8 md:pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Article Archive
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-neutral-950 md:text-6xl">
            Essays, notes, and engineering fieldwork.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 md:mt-5 md:text-lg">
            A preview of the article list layout. These placeholder articles
            will be replaced with the real writing system later.
          </p>
        </div>

        <section aria-labelledby="all-articles" className="space-y-5">
          <div className="flex items-end justify-between border-b border-neutral-200 pb-3">
            <h2
              id="all-articles"
              className="text-2xl font-semibold text-neutral-950"
            >
              All Articles
            </h2>
            <p className="text-sm font-medium text-neutral-500">
              {articles.length} drafts
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
