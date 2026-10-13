import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHead } from "@/components/PageHead";
import { Section, Wrap } from "@/components/Ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "출처와 원칙", description: "나두인물이 참고한 자료와 글쓰기 원칙. 영화 줄거리는 다시 쓴 요약이며, 확인되지 않은 이야기는 ‘전해지는 이야기’로 표시합니다.", path: "/sources" });
const SRC = [
  ["AFI Catalog: The Aviator (2004) — 줄거리와 제작·사실 비교 노트", "https://catalog.afi.com/Catalog/moviedetails/72039"],
  ["Wikipedia: The Aviator (2004 film)", "https://en.wikipedia.org/wiki/The_Aviator_(2004_film)"],
  ["Wikipedia: Howard Hughes", "https://en.wikipedia.org/wiki/Howard_Hughes"],
  ["Roger Ebert, The Aviator 리뷰 (2004)", "https://www.rogerebert.com/reviews/the-aviator-2004"],
  ["Wikimedia Commons (퍼블릭 도메인 사진)", "https://commons.wikimedia.org/"],
  ["사진: TWA 록히드 L-049 콘스텔레이션 N9414H (1952) — Bill Larkins, CC BY-SA 2.0, 위키미디어 공용", "https://commons.wikimedia.org/wiki/File:Lockheed_L-049_Constellation,_Trans_World_Airlines_(TWA)_N9414H_(4851345521).jpg"],
  ["CC BY-SA 2.0 라이선스", "https://creativecommons.org/licenses/by-sa/2.0/"],
];
export default function Page() {
  return (
    <Wrap>
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <PageHead kicker="SOURCES" title="출처와 원칙" />
      <Section title="원칙">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>영화 줄거리는 우리말로 다시 쓴 요약입니다. 대사는 짧게, 확인된 것만 씁니다.</li>
          <li>확인되지 않은 이야기는 ‘전해지는 이야기’로 표시합니다. 자료끼리 다르면 둘 다 적습니다.</li>
          <li>사진은 퍼블릭 도메인 또는 자유 이용 허락(CC BY·CC BY-SA) 자료만 쓰고, 작가·라이선스·출처 링크를 붙입니다.</li>
          <li>잘못된 내용을 찾으면 알려 주세요. 고치겠습니다.</li>
        </ul>
      </Section>
      <Section title="참고 자료">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          {SRC.map(([t, u]) => <li key={u}><a href={u} className="underline hover:text-terra" rel="noopener noreferrer" target="_blank">{t}</a></li>)}
        </ul>
      </Section>
    </Wrap>
  );
}
