"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

type SiteNavigationProps = {
  placement: "top" | "bottom";
};

export function SiteNavigation({ placement }: SiteNavigationProps) {
  const pathname = usePathname();
  const isBottom = placement === "bottom";

  return (
    <nav
      aria-label="Primary navigation"
      className={
        isBottom
          ? "fixed inset-x-0 bottom-0 z-20 border-t border-neutral-200 bg-white/95 px-5 py-3 backdrop-blur md:hidden"
          : "sticky top-0 z-20 hidden border-b border-neutral-200 bg-white/90 backdrop-blur md:block"
      }
    >
      <div
        className={
          isBottom
            ? "mx-auto grid max-w-sm grid-cols-3 gap-2"
            : "mx-auto flex max-w-5xl items-center justify-between px-8 py-5"
        }
      >
        {!isBottom && (
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-neutral-950"
          >
            Hsuan
          </Link>
        )}

        <div
          className={
            isBottom
              ? "contents"
              : "flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 p-1"
          }
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isBottom
                    ? `rounded-full px-3 py-2 text-center text-xs font-semibold transition ${
                        isActive
                          ? "bg-neutral-950 text-white"
                          : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
                      }`
                    : `rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-neutral-950 text-white"
                          : "text-neutral-500 hover:text-neutral-950"
                      }`
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
