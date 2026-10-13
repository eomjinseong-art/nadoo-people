import { PageHead } from "@/components/PageHead";
import { PeopleBrowser } from "@/components/PeopleBrowser";
import { Wrap } from "@/components/Ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "인물 검색", description: "이름, 영어 이름, 영화·뮤지컬 제목으로 나두인물의 인물을 찾습니다.", path: "/search" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="SEARCH" title="인물 검색" lead="한글·영어 이름이나 영화 제목을 입력하세요." />
      <PeopleBrowser autoFocus />
    </Wrap>
  );
}
