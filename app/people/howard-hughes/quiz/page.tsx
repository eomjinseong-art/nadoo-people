import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Quiz } from "@/components/Quiz";
import { Wrap } from "@/components/Ui";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/quiz";
export const metadata = pageMetadata({ title: "하워드 휴즈 · 에비에이터 퀴즈", description: "에비에이터와 하워드 휴즈의 삶에 대한 12문제 퀴즈. H-1 속도 기록, 세계 일주, 스프루스 구스, 영화와 실제의 차이.", path });
export default function Page() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "퀴즈", path }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "퀴즈" }]} />
      <PageHead kicker="QUIZ" title="휴즈 퀴즈 12문제" lead="고르면 바로 정답과 설명이 나옵니다." />
      <Quiz />
    </Wrap>
  );
}
