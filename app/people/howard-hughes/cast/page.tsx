import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/cast";
const desc = "에비에이터의 배우들과 그들이 연기한 실제 인물 비교. 하워드 휴즈, 캐서린 헵번, 에바 가드너, 후안 트립, 브루스터 의원, 그리고 창작 인물 피츠 교수.";
export const metadata = pageMetadata({ title: "에비에이터 등장인물 · 배우와 실제 인물", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "배우와 실제 인물", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "배우와 실제 인물" }]} /></>;
import { VerdictBadge, Wrap, Legend } from "@/components/Ui";
import { CAST } from "@/data/hughes";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="CAST VS REAL" title="배우와 실제 인물" lead="영화 속 인물이 실제로 어떤 사람이었는지, 어디까지 같고 어디서 다른지." />
      <Legend />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {Object.entries(CAST).map(([k, c]) => (
          <article key={k} id={k} className="scroll-mt-28 rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <div className="flex items-start justify-between gap-2"><div><h2 className="font-serif text-xl">{c.real}</h2><p className="text-xs text-muted">{c.realEn}</p></div><VerdictBadge v={c.verdict} /></div>
            <p className="mt-1 text-terra">🎭 {c.actor} · {c.role}</p>
            <p className="mt-2"><b>실제:</b> {c.life}</p>
            <p><b>영화:</b> {c.inFilm}</p>
            <p className="text-muted"><b className="text-ink">차이:</b> {c.gap}</p>
          </article>
        ))}
      </div>
    </Wrap>
  );
}
