import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/ocd";
const desc = "영화 에비에이터가 그린 하워드 휴즈의 강박 증상을 조심스럽게 읽습니다. 사후 진단의 한계, 실제 기록, 그리고 도움을 받을 수 있는 곳.";
export const metadata = pageMetadata({ title: "하워드 휴즈와 강박장애, 조심스럽게 읽기", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "강박장애", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "강박장애" }]} /></>;
import { Section, Wrap } from "@/components/Ui";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="OCD · HANDLE WITH CARE" title="강박장애, 조심스럽게" lead="휴즈는 죽기 전 정신과 진단을 공개적으로 받은 적이 없습니다. 이 페이지는 진단이 아니라, 영화와 기록을 읽는 방법에 대한 이야기입니다." />
      <Section title="영화가 보여 준 것" en="On screen">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>손을 피가 날 만큼 씻고, 남이 만진 물건을 피합니다.</li>
          <li>같은 말을 멈추지 못하고 되풀이합니다.</li>
          <li>상영실에 스스로를 가둡니다.</li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-muted">각본가와 배우는 강박장애(OCD)를 염두에 두고 이 모습을 그렸다고 알려져 있습니다. 영화는 이것을 어린 시절 어머니의 영향과 연결하지만, 그것은 해석입니다.</p>
      </Section>
      <Section title="기록에 남은 것" en="On record">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>1944년 무렵 같은 말을 되풀이한 뒤 몇 달 사라졌다는 이야기가 전기에 나옵니다.</li>
          <li>1958년 무렵 상영실에 몇 달 머물렀다는 기록이 있습니다.</li>
          <li>여러 번의 비행기 사고, 특히 1946년의 큰 부상 뒤 진통제를 오래 썼다고 알려져 있습니다.</li>
          <li>사후에 전문가들이 남긴 분석들은 강박장애 가능성을 이야기하지만, 직접 진찰한 결과는 아닙니다.</li>
        </ul>
      </Section>
      <Section title="읽을 때 기억할 것" en="Keep in mind">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>강박장애는 성격이 ‘깔끔한’ 것과 다릅니다. 본인이 원하지 않는 생각과 행동이 반복되어 괴로운 병입니다.</li>
          <li>치료(인지행동치료, 약물)로 많이 좋아질 수 있습니다. 휴즈의 시대에는 이런 치료가 거의 없었습니다.</li>
          <li>영화 속 극단적인 모습이 강박장애의 전형은 아닙니다.</li>
        </ul>
      </Section>
      <div className="mt-8 rounded-lg border border-sky/40 bg-sky/5 p-4 text-sm leading-7">
        <p className="font-semibold text-sky">혹시 비슷한 어려움이 있다면</p>
        <p>정신건강 위기상담 전화 <b>1577-0199</b> (24시간), 또는 가까운 정신건강의학과·정신건강복지센터에 이야기해 보세요. 혼자 견디지 않아도 됩니다.</p>
      </div>
    </Wrap>
  );
}
