import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/timeline";
const desc = "하워드 휴즈의 평생 연표. 휴즈 툴 상속, 지옥의 천사들, 속도 기록, 세계 일주, XF-11 추락, H-4 비행, RKO, TWA, 라스베이거스, 1976년 죽음과 유언장 소동까지.";
export const metadata = pageMetadata({ title: "하워드 휴즈 연표 1905–1976", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "연표", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "연표" }]} /></>;
import { VerdictBadge, Wrap } from "@/components/Ui";
import { TIMELINE } from "@/data/hughes";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="LIFE TIMELINE · 1905–1976" title="하워드 휴즈 평생 연표" lead="영화는 1947년에서 끝납니다. 그 뒤 29년이 더 있었습니다." />
      <ol className="mt-6 border-l-2 border-line pl-5">
        {TIMELINE.map((t, i) => (
          <li key={i} className="relative pb-5">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-terra bg-bg" />
            {t.after1947 && !TIMELINE[i - 1]?.after1947 ? <p className="mb-3 rounded bg-stone px-3 py-2 text-xs text-muted">🎬 여기서부터는 영화에 나오지 않는 이야기입니다.</p> : null}
            <p className="font-serif text-lg text-terra">{t.year}</p>
            <p className="flex items-start gap-2 text-sm leading-7">{t.text} {t.tag ? <VerdictBadge v={t.tag} /> : null}</p>
          </li>
        ))}
      </ol>
    </Wrap>
  );
}
