import { PageHead } from "@/components/PageHead";
import { PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Quiz } from "@/components/Quiz";
import { Wrap } from "@/components/Ui";
import { P, QUIZ_P } from "@/data/pateman";
import { pageMetadata } from "@/lib/seo";
const path = `${P}/quiz`;
export const metadata = pageMetadata({ title: "킹키 부츠 실제 이야기 퀴즈", description: "얼스 바턴의 구두 공장, 디바인 부츠, 롤라의 진실, BBC 다큐까지 12문제.", path });
export default function Page() {
  return (
    <Wrap><PatemanCrumbs label="퀴즈" path={path} />
      <PageHead kicker="QUIZ" title="킹키 부츠 퀴즈 12문제" lead="고르면 바로 정답과 설명이 나옵니다." />
      <Quiz items={QUIZ_P} />
    </Wrap>
  );
}
