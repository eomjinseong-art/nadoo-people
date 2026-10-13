import { PageHead } from "@/components/PageHead";
import { PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Legend, VerdictBadge, Wrap } from "@/components/Ui";
import { P, PEOPLE_INVOLVED } from "@/data/pateman";
import { pageMetadata } from "@/lib/seo";
const path = `${P}/people`;
export const metadata = pageMetadata({ title: "킹키 부츠 관련 인물 · 실제와 극", description: "스티브 패이트먼, 아버지 리처드, 레이시스의 수 셰퍼드, 창작 인물 롤라, BBC 다큐 제작진, 영화·뮤지컬 창작진.", path });
export default function Page() {
  return (
    <Wrap><PatemanCrumbs label="관련 인물" path={path} />
      <PageHead kicker="PEOPLE" title="관련 인물" lead="실제 사람들과, 극에서 그들이 어떻게 바뀌었는지." />
      <Legend />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PEOPLE_INVOLVED.map((c) => (
          <article key={c.en} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <div className="flex items-start justify-between gap-2"><div><h2 className="font-serif text-xl">{c.name}</h2><p className="text-xs text-muted">{c.en} · {c.role}</p></div><VerdictBadge v={c.verdict} /></div>
            <p className="mt-2"><b>실제:</b> {c.real}</p>
            <p className="text-muted"><b className="text-ink">극:</b> {c.show}</p>
          </article>
        ))}
      </div>
    </Wrap>
  );
}
