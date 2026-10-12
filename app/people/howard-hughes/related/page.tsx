import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/related";
const desc = "에비에이터와 함께 볼 영화. 멜빈과 하워드, 사기꾼(The Hoax), 룰스 돈 어플라이 등 하워드 휴즈를 다룬 작품들.";
export const metadata = pageMetadata({ title: "하워드 휴즈가 나오는 다른 영화", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "함께 볼 영화", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "함께 볼 영화" }]} /></>;
import { Card, Wrap } from "@/components/Ui";
import { RELATED_FILMS } from "@/data/hughes";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="RELATED FILMS" title="함께 볼 영화" lead="휴즈는 여러 영화에서 다른 얼굴로 나옵니다. 우리말 제목은 이 사이트에서 옮긴 것일 수 있고, 볼 수 있는 곳은 시기마다 다릅니다." />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {RELATED_FILMS.map((f) => <Card key={f.en} title={f.title} sub={`${f.en} · ${f.year}`}>{f.note}</Card>)}
      </div>
    </Wrap>
  );
}
