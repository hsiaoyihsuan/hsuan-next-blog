import { SpriteImage } from "@/app/_components/sprite-image";

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto grid max-w-5xl gap-8 px-5 pt-6 md:grid-cols-[280px_1fr] md:gap-6 md:px-8 md:pt-14">
        <div className="relative aspect-5/4 overflow-hidden rounded-lg bg-neutral-200 shadow-sm md:aspect-square">
          <SpriteImage
            alt="Portrait of Hsuan"
            position="left top"
            className="h-full w-full"
          />
        </div>

        <div className="space-y-8">
          <div className="border-b border-neutral-200 pb-8 md:pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              About Me
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-neutral-950 md:text-6xl">
              I build interfaces and write down what I learn.
            </h1>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-7 text-neutral-600 md:text-lg">
            <p>
              Hi, I am Hsuan. This blog is a place for notes on frontend
              engineering, AI-assisted development, product craft, and the
              everyday decisions that make software easier to maintain.
            </p>
            <p>
              The final page design will come later. For now, this simple layout
              gives the site a real route, readable structure, and enough shape
              to test navigation and content rhythm.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
