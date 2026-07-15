import Image from "next/image";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM8.02 8.02h4.18v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.68V23h-4.36v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H8.02V8.02Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CompanyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M16 9h3v12M9 7h3M9 11h3M9 15h3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-28 text-neutral-950 md:pb-16">
      <section className="mx-auto grid max-w-5xl gap-8 px-5 pt-8 md:grid-cols-[224px_1fr] md:gap-10 md:px-8 md:pt-14">
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-lg bg-neutral-200 shadow-sm md:mx-0">
          <Image
            src="/images/about/profile.jpeg"
            alt="Portrait of Hsuan Hsiao"
            fill
            priority
            sizes="224px"
            className="object-cover grayscale"
          />
        </div>

        <div className="space-y-8">
          <div className="border-b border-neutral-200 pb-8 md:pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              About Me
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-neutral-950 md:text-6xl">
              Hsuan Hsiao
            </h1>
            <p className="mt-4 text-lg font-medium text-neutral-600">
              Software Engineer
            </p>

            <dl className="mt-6 space-y-4 text-sm text-neutral-600">
              <div className="flex items-center gap-3">
                <dt className="shrink-0 text-neutral-400">
                  <span className="sr-only">Location</span>
                  <LocationIcon />
                </dt>
                <dd>Taiwan, Taipei</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="shrink-0 text-neutral-400">
                  <span className="sr-only">Company</span>
                  <CompanyIcon />
                </dt>
                <dd>Trusted Solution Inc.</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="shrink-0 text-neutral-400">
                  <span className="sr-only">Email</span>
                  <EmailIcon />
                </dt>
                <dd className="min-w-0">
                  <a
                    href="mailto:hsuan9705@gmail.com"
                    className="break-all text-neutral-950 transition hover:text-neutral-500"
                  >
                    hsuan9705@gmail.com
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/hsiaoyihsuan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yi-hsuan-hsiao-tw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-7 text-neutral-600 md:text-lg">
            <p>
              嗨，我是 Hsuan，一位喜歡探索新技術的軟體工程師，目前在雲端 POS 新創公司參與各種有趣的產品開發。
            </p>
            <p>
              我的技能點大多投入在後端工程，但偶爾也會施展一些前端魔法。比起單純專精某個領域，我更享受把一個想法從概念一路打磨成真正能被使用的產品。
            </p>
            <p>
              如果要替自己選個職業，大概會是個兼修魔法與劍術的魔劍士（Spellblade）吧。
            </p>
            <p>
              偶爾我也會深入研究某個技術主題，把旅途中的見聞與心得整理成文章，分享在這間《The
              Tavern of Code》裡。
            </p>
            <p>歡迎透過 LinkedIn 找我交流。</p>
            <p>
              Hi, I&apos;m Hsuan, a software engineer and wandering{" "}
              <strong className="font-semibold text-neutral-950">
                Spellblade
              </strong>{" "}
              exploring the realms of software engineering.
            </p>
            <p>
              My primary weapon is backend engineering, though I occasionally
              weave frontend magic when the adventure calls for it.
            </p>
            <p>
              I enjoy turning ideas into real products, traveling from
              whiteboard sketches to production deployments.
            </p>
            <p>
              Every now and then, I return to{" "}
              <strong className="font-semibold text-neutral-950">
                The Tavern of Code
              </strong>{" "}
              to share stories from recent adventures in software, architecture,
              and engineering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
