import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
const path = "/people/howard-hughes/aircraft";
const desc = "하워드 휴즈가 만들고 몬 비행기 도감. H-1 레이서 속도 기록, 1938년 세계 일주, XF-11 추락, 나무로 만든 H-4 허큘리스(스프루스 구스), 콘스텔레이션.";
export const metadata = pageMetadata({ title: "하워드 휴즈의 비행기 · H-1, XF-11, H-4 허큘리스", description: desc, path });
const crumbs = <><JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "비행기", path }])])} /><Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "비행기" }]} /></>;
import Image from "next/image";
import { Wrap } from "@/components/Ui";
import { AIRCRAFT } from "@/data/hughes";
export default function Page() {
  return (
    <Wrap>{crumbs}
      <PageHead kicker="AIRCRAFT" title="휴즈의 비행기 도감" lead="사진은 퍼블릭 도메인 또는 CC 라이선스 자료입니다. 작가·라이선스·출처를 함께 적었습니다." />
      <div className="mt-6 space-y-6">
        {AIRCRAFT.map((a) => (
          <article key={a.slug} id={a.slug} className="scroll-mt-28 grid gap-4 rounded-lg border border-line bg-card p-4 sm:grid-cols-[260px_1fr]">
            {a.img ? (
              <figure>
                <Image src={a.img.src} alt={a.img.alt} width={520} height={360} className="w-full rounded object-cover" />
                <figcaption className="mt-1 text-[11px] leading-4 text-muted">{a.img.credit}{a.img.license ? <> · <a href={a.img.license.url} className="underline" rel="license noopener noreferrer">{a.img.license.name}</a></> : null} · <a href={a.img.page} className="underline">위키미디어 공용</a></figcaption>
              </figure>
            ) : <div className="flex items-center justify-center rounded bg-stone text-4xl" aria-hidden>✈</div>}
            <div>
              <p className="text-xs text-terra">{a.year}</p>
              <h2 className="font-serif text-xl">{a.name} <span className="text-sm text-muted">{a.en}</span></h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">{a.facts.map((f, i) => <li key={i}>{f}</li>)}</ul>
              <p className="mt-2 text-sm text-muted">🎬 영화에서: {a.inFilm}</p>
            </div>
          </article>
        ))}
      </div>
    </Wrap>
  );
}
