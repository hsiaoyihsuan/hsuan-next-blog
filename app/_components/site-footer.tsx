export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-5 py-8 pb-28 text-center text-sm font-medium text-neutral-500 md:px-8 md:pb-8">
      © {year} Hsuan. Powered by Next.js.
    </footer>
  );
}
