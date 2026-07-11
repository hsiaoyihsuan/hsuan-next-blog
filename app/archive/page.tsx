import { getAllArticleMetas } from "@/app/_lib/articles";
import { ArchiveList } from "@/app/archive/_components/archive-list";

export default async function Archive() {
  const articles = await getAllArticleMetas();

  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-5 pt-6 md:gap-10 md:px-8 md:pt-14">
        <header className="border-b border-neutral-200 pb-5 md:pb-6">
          <h1 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Article Archive
          </h1>
        </header>

        <ArchiveList articles={articles} />
      </section>
    </main>
  );
}
