import { PageHead } from "@/components/PageHead";
import { PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Section, Wrap } from "@/components/Ui";
import { P, SOURCES_P } from "@/data/pateman";
import { pageMetadata } from "@/lib/seo";
const path = `${P}/sources`;
export const metadata = pageMetadata({ title: "스티브 패이트먼 · 출처", description: "킹키 부츠 실제 이야기에 참고한 BBC, 텔레그래프, 노샘프턴 박물관 자료와 이미지 출처.", path });
export default function Page() {
  return (
    <Wrap><PatemanCrumbs label="출처" path={path} />
      <PageHead kicker="SOURCES" title="출처" />
      <Section title="원칙">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>본인 발언은 위 기사에 실린 것만 옮기고, 만들어 낸 인용은 없습니다.</li>
          <li>자료끼리 다르면(예: Brooks/Brookes 철자) 둘 다 적습니다. 확인되지 않은 것은 ‘전해지는 이야기’로 표시합니다.</li>
          <li>실존 인물의 사진은 자유 이용 허락 자료가 없어 싣지 않았고, AI로 실존 인물을 그리지 않았습니다. 빨간 부츠 그림은 AI 일러스트입니다.</li>
        </ul>
      </Section>
      <Section title="참고 자료">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          {SOURCES_P.map(([t, u]) => <li key={u}><a href={u} className="underline hover:text-terra" rel="noopener noreferrer" target="_blank">{t}</a></li>)}
          <li>이미지: 빨간 부츠 — AI 일러스트(OpenAI gpt-image-1), 사람 없음</li>
        </ul>
      </Section>
    </Wrap>
  );
}
