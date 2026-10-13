import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { PeopleBrowser } from "@/components/PeopleBrowser";
import { Wrap } from "@/components/Ui";
import { PEOPLE } from "@/data/people";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "인물 전체", description: `나두인물의 인물 ${PEOPLE.length}명. 분야·나라·시대·관련 영화와 뮤지컬로 거르고 이름으로 찾기.`, path: "/people" });

export default function Page() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([itemListLd("인물 전체", "/people", PEOPLE.map((p) => ({ name: `${p.name} (${p.en})`, path: `/people/${p.slug}` })))])} />
      <PageHead kicker="ALL PEOPLE" title="인물 전체" lead="분야, 나라, 시대, 관련 작품으로 걸러 보세요." />
      <PeopleBrowser />
    </Wrap>
  );
}
