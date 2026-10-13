"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personBySlug } from "@/data/people";

export function PersonTabs({ slug }: { slug: string }) {
  const p = personBySlug(slug)!;
  const pathname = usePathname();
  const base = `/people/${slug}`;
  const active = [...p.tabs].sort((a, b) => b.href.length - a.href.length).find((t) => pathname === base + t.href || (t.href && pathname.startsWith(`${base}${t.href}/`)));
  return (
    <div className="border-b border-line bg-stone/40">
      <nav aria-label={`${p.name} 메뉴`} className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:none]">
        <span className="shrink-0 self-center pr-2 font-serif text-sm text-ink">{p.name}</span>
        {p.tabs.map((t) => {
          const on = active?.href === t.href;
          return (
            <Link key={t.href} href={base + t.href} aria-current={on ? "page" : undefined} className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${on ? "bg-terra/10 font-semibold text-terra" : "text-muted hover:bg-stone hover:text-ink"}`}>
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
