import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

type PaginationItem = number | "...";

function getPageHref(page: number) {
  return page === 1 ? "/" : `/?page=${page}`;
}

function getPaginationItems(
  currentPage: number,
  totalPages: number,
): PaginationItem[] {
  const visiblePages = new Set([1, totalPages]);

  for (let page = currentPage - 1; page <= currentPage + 1; page += 1) {
    if (page > 1 && page < totalPages) {
      visiblePages.add(page);
    }
  }

  const pages = Array.from(visiblePages).sort((a, b) => a - b);

  return pages.flatMap((page, index) => {
    const previousPage = pages[index - 1];

    if (previousPage && page - previousPage > 1) {
      return ["..." as const, page];
    }

    return [page];
  });
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const items = getPaginationItems(currentPage, totalPages);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const linkClass =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-neutral-200 bg-white px-3 text-sm font-semibold text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950";
  const disabledClass =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 px-3 text-sm font-semibold text-neutral-400";

  return (
    <nav
      aria-label="Article pagination"
      className="flex flex-wrap items-center justify-center gap-2 pt-2"
    >
      {currentPage > 1 ? (
        <Link
          href={getPageHref(previousPage)}
          aria-label="Go to previous page"
          className={linkClass}
        >
          Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          Previous
        </span>
      )}

      {items.map((item, index) => {
        if (item === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="inline-flex h-10 min-w-10 items-center justify-center text-sm font-semibold text-neutral-400"
            >
              ...
            </span>
          );
        }

        const isActive = item === currentPage;

        return isActive ? (
          <span
            key={item}
            aria-current="page"
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-neutral-950 px-3 text-sm font-semibold text-white"
          >
            {item}
          </span>
        ) : (
          <Link
            key={item}
            href={getPageHref(item)}
            aria-label={`Go to page ${item}`}
            className={linkClass}
          >
            {item}
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          href={getPageHref(nextPage)}
          aria-label="Go to next page"
          className={linkClass}
        >
          Next
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          Next
        </span>
      )}
    </nav>
  );
}
