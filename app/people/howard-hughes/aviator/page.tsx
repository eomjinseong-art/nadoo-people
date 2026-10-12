import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Legend, Section, SpoilerNote, Wrap } from "@/components/Ui";
import { CHAPTERS, FILM } from "@/data/hughes";
import { breadcrumbLd, canonicalUrl, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const path = "/people/howard-hughes/aviator";
const desc = "영화 『에비에이터』(The Aviator, 2004) 장면별 줄거리 9장. 결말 포함 스포일러와 함께, 장마다 영화와 실제 하워드 휴즈의 삶을 비교합니다.";
export const metadata = pageMetadata({ title: "에비에이터 줄거리 · 결말 · 실화 비교", description: desc, path, type: "article" });

export default function Aviator() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([
        breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "에비에이터", path }]),
        { "@type": "Movie", name: "The Aviator", alternateName: "에비에이터", dateCreated: "2004", director: { "@type": "Person", name: "Martin Scorsese" }, url: canonicalUrl(path) },
        itemListLd("에비에이터 장별 줄거리", path, CHAPTERS.map((c) => ({ name: `${c.n}장 ${c.title}`, path: `${path}/${c.slug}` }))),
      ])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { label: "에비에이터" }]} />
      <PageHead kicker={`THE AVIATOR · ${FILM.year}`} title="에비에이터, 장면별로 따라가기" lead={`${FILM.director} 감독, ${FILM.writer} 각본, ${FILM.runtime}. 1927년 할리우드에서 1947년 H-4 비행까지, 휴즈의 20년을 그립니다.`} />
      <SpoilerNote />
      <Section title="영화 정보" en="About the film">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7">
          <li>{FILM.awards}</li>
          <li>{FILM.look}</li>
          <li>휴즈 역 레오나르도 디캐프리오, 캐서린 헵번 역 케이트 블란쳇. 블란쳇은 실존 배우를 연기해 상을 받았습니다.</li>
          <li>볼 수 있는 곳(OTT)은 시기마다 바뀌니 각 서비스에서 확인하세요.</li>
        </ul>
      </Section>
      <Section title="9장 목차" en="Chapters">
        <Legend />
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {CHAPTERS.map((c) => (
            <li key={c.n}>
              <Link href={`${path}/${c.slug}`} className="block rounded-lg border border-line bg-card p-4 hover:border-terra">
                <p className="text-xs text-terra">{c.n}장 · {c.span}</p>
                <p className="font-serif text-lg">{c.title} <span className="text-sm text-muted">{c.en}</span></p>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{c.plot[0]}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="영화가 크게 바꾼 것 세 가지" en="Biggest changes">
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-7">
          <li>상영실 은둔은 1958년 무렵의 일인데, 1947년 청문회 직전으로 옮겼습니다.</li>
          <li>에바 가드너가 무너진 그를 돌봤다는 이야기는 그녀의 자서전에 없습니다.</li>
          <li>피츠 교수는 실존 인물이 아닙니다.</li>
        </ol>
      </Section>
    </Wrap>
  );
}
