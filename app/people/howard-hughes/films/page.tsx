import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/films";
const desc = "제작자·감독 하워드 휴즈의 영화들. 지옥의 천사들(1930), 스카페이스(1932), 무법자(1943/1946)와 RKO 시절.";
export const metadata = pageMetadata({ title: "하워드 휴즈가 만든 영화 · 지옥의 천사들, 스카페이스, 무법자", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "그가 만든 영화", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "그가 만든 영화" }]} /></>;
import Image from "next/image";
import { Wrap } from "@/components/Ui";
import { HIS_FILMS } from "@/data/hughes";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="HIS FILMS" title="그가 만든 영화" lead="휴즈는 1920–30년대 독립 제작자였고, 1948년부터는 RKO 영화사를 소유했습니다." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {HIS_FILMS.map((f) => (
          <article key={f.en} className="flex gap-4 rounded-lg border border-line bg-card p-4 text-sm leading-7">
            {"img" in f && f.img ? (
              <figure className="w-28 shrink-0">
                <Image src={f.img.src} alt={`${f.en} 포스터`} width={224} height={330} className="w-full rounded" />
                <figcaption className="mt-1 text-[10px] leading-4 text-muted">{f.img.credit} · <a href={f.img.page} className="underline">출처</a></figcaption>
              </figure>
            ) : null}
            <div>
              <h2 className="font-serif text-xl">{f.title}</h2>
              <p className="text-xs text-muted">{f.en} · {f.year} · {f.role}</p>
              <p className="mt-2">{f.note}</p>
            </div>
          </article>
        ))}
      </div>
    </Wrap>
  );
}
