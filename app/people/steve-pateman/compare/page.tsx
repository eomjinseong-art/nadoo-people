import { PageHead } from "@/components/PageHead";
import { PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Legend, Section, VerdictBadge, Wrap } from "@/components/Ui";
import { COMPARE, LOLA, P } from "@/data/pateman";
import { pageMetadata } from "@/lib/seo";
const path = `${P}/compare`;
export const metadata = pageMetadata({ title: "킹키 부츠 영화·뮤지컬 vs 실제", description: "찰리 프라이스와 스티브 패이트먼, 롤라는 실존했나, 밀라노 vs 뒤셀도르프, 공장의 실제 결말. 사실·각색·창작·전해지는 이야기로 구분한 비교 카드.", path });
export default function Page() {
  return (
    <Wrap><PatemanCrumbs label="영화·뮤지컬 vs 실제" path={path} />
      <PageHead kicker="SHOW VS REAL" title="영화·뮤지컬 vs 실제" lead="2005년 영화와 2012년 뮤지컬은 큰 줄거리가 같습니다. 둘 다 실제 이야기를 출발점으로 삼았습니다." />
      <Legend />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {COMPARE.map((c) => (
          <article key={c.topic} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <div className="flex items-start justify-between gap-2"><h2 className="font-serif text-lg">{c.topic}</h2><VerdictBadge v={c.verdict} /></div>
            <p className="mt-1"><b>🎬 영화·뮤지컬:</b> {c.show}</p>
            <p className="text-muted"><b className="text-ink">🏭 실제:</b> {c.real}</p>
          </article>
        ))}
      </div>
      <Section title="롤라, 자세히" en="Lola in detail">
        <ul className="space-y-2 text-sm leading-7">{LOLA.points.map((p) => <li key={p.label} className="flex items-start gap-2"><VerdictBadge v={p.verdict} /><span><b>{p.label}:</b> {p.text}</span></li>)}</ul>
      </Section>
    </Wrap>
  );
}
