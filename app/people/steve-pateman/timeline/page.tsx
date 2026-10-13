import { PageHead } from "@/components/PageHead";
import { PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Legend, VerdictBadge, Wrap } from "@/components/Ui";
import { P, TIMELINE } from "@/data/pateman";
import { pageMetadata } from "@/lib/seo";
const path = `${P}/timeline`;
export const metadata = pageMetadata({ title: "킹키 부츠 실제 이야기 연표 · W.J. 브룩스", description: "1889년 창업한 얼스 바턴 구두 공장 W.J. 브룩스의 가업, 1990년대 위기, 디바인 부츠, 1999년 BBC 다큐, 2000년 폐업, 영화와 뮤지컬까지.", path });
export default function Page() {
  return (
    <Wrap><PatemanCrumbs label="연표" path={path} />
      <PageHead kicker="REAL STORY TIMELINE" title="실제 이야기 연표" lead="영화는 공장이 살아나며 끝나지만, 실제 공장은 2000년에 문을 닫았습니다." />
      <Legend />
      <ol className="mt-6 border-l-2 border-line pl-5">
        {TIMELINE.map((t, i) => (
          <li key={i} className="relative pb-5">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-terra bg-bg" />
            <p className="font-serif text-lg text-terra">{t.year}</p>
            <p className="flex items-start gap-2 text-sm leading-7">{t.text} {t.tag ? <VerdictBadge v={t.tag} /> : null}</p>
          </li>
        ))}
      </ol>
    </Wrap>
  );
}
