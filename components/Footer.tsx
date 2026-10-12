import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { BRAND_LINE, NAV, SISTER_SITES, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-stone/70">
      <CoupangBanner />
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mt-3 max-w-3xl">
          영화 줄거리는 우리말로 다시 쓴 요약이고, 영화 대사를 길게 옮기지 않습니다. 확인되지 않은 이야기는 ‘전해지는 이야기’로 적습니다. 영화 제목과 상표는 각 권리자의 것이며, 사진은 퍼블릭 도메인 자료만 씁니다.
        </p>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="underline decoration-line hover:text-terra">{i.label}</Link>
          ))}
        </nav>
        <p className="mt-4 text-xs">나두 사이트</p>
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {SISTER_SITES.map((s) => (
            <li key={s.href}><a href={s.href} className="underline decoration-line hover:text-terra">{s.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
