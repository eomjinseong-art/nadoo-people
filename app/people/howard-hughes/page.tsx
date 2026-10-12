import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Card, Section, Wrap } from "@/components/Ui";
import { CHAPTERS, FILM } from "@/data/hughes";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/seo";

const path = "/people/howard-hughes";
const desc = "하워드 휴즈(1905–1976)를 영화 『에비에이터』로 만나기. 장면별 줄거리, 영화와 실제 비교, 평생 연표, H-1부터 H-4 허큘리스까지 비행기, 그가 만든 영화, 강박장애 이야기, 퀴즈.";
export const metadata = pageMetadata({ title: "하워드 휴즈 Howard Hughes · 에비에이터로 만나기", description: desc, path });

const MENU = [
  { href: `${path}/aviator`, title: "에비에이터 장면별 줄거리", sub: `${CHAPTERS.length}장 · 스포일러`, text: "영화를 9장으로 나눠 따라가고, 장마다 실제와 비교합니다." },
  { href: `${path}/cast`, title: "배우와 실제 인물", sub: "Cast vs Real", text: "디캐프리오, 블란쳇… 그리고 실제 그 사람들." },
  { href: `${path}/timeline`, title: "평생 연표", sub: "1905–1976", text: "영화가 끝난 1947년 뒤, 30년의 이야기까지." },
  { href: `${path}/aircraft`, title: "비행기 도감", sub: "H-1 · XF-11 · H-4", text: "그가 만들고 몰았던 비행기들." },
  { href: `${path}/films`, title: "그가 만든 영화", sub: "Hell's Angels · Scarface · The Outlaw", text: "제작자 휴즈의 작품들." },
  { href: `${path}/ocd`, title: "강박장애, 조심스럽게", sub: "OCD", text: "영화가 보여 준 병과, 우리가 알 수 있는 것과 없는 것." },
  { href: `${path}/quiz`, title: "퀴즈", sub: "12문제", text: "얼마나 기억하나요?" },
  { href: `${path}/related`, title: "함께 볼 영화", sub: "Related", text: "휴즈가 나오는 다른 영화들." },
];

export default function Hub() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path }]), { "@type": "Person", name: "Howard Hughes", alternateName: "하워드 휴즈", birthDate: "1905", deathDate: "1976-04-05", url: canonicalUrl(path), sameAs: ["https://en.wikipedia.org/wiki/Howard_Hughes"] }])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "하워드 휴즈" }]} />
      <div className="mt-4 grid gap-6 sm:grid-cols-[200px_1fr]">
        <figure>
          <Image src="/img/hughes-1938.jpg" alt="1938년의 하워드 휴즈" width={400} height={500} className="w-full rounded-lg object-cover" priority />
          <figcaption className="mt-1 text-[11px] text-muted">1938년. 퍼블릭 도메인 (<a className="underline" href="https://commons.wikimedia.org/wiki/File:Howard_Hughes_1938_(cropped).jpg">출처</a>)</figcaption>
        </figure>
        <div>
          <PageHead kicker="HOWARD HUGHES · 1905–1976" title="하워드 휴즈" lead="열여덟에 아버지 회사를 물려받은 텍사스 청년. 할리우드에서 가장 비싼 영화를 찍고, 세계 속도 기록을 깨고, 항공사를 사고, 나무로 세상에서 가장 큰 비행기를 만들었습니다. 그리고 마지막 20년은 거의 아무도 만나지 않고 살았습니다." />
          <p className="mt-3 text-sm leading-7 text-muted">
            🎬 만나는 영화: <b className="text-ink">{FILM.ko}</b> ({FILM.en}, {FILM.year}) · 감독 {FILM.director} · 각본 {FILM.writer} · {FILM.runtime}
            <br />🏆 {FILM.awards}
          </p>
        </div>
      </div>
      <Section title="둘러보기" en="Explore">
        <div className="grid gap-3 sm:grid-cols-2">
          {MENU.map((m) => (
            <Card key={m.href} href={m.href} title={m.title} sub={m.sub}>{m.text}</Card>
          ))}
        </div>
      </Section>
      <Section title="한눈에 보는 휴즈" en="At a glance">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
          <li>재산의 바탕: 아버지의 석유 드릴 날 회사 <b>휴즈 툴</b>.</li>
          <li>영화: 『지옥의 천사들』(1930), 『스카페이스』(1932), 『무법자』(1943/46). 1948년부터 RKO 영화사 소유.</li>
          <li>하늘: 1935년 속도 기록, 1938년 세계 일주 91시간, 1946년 XF-11 추락, 1947년 H-4 비행.</li>
          <li>사업: 휴즈 항공기, TWA, 라스베이거스 호텔들, 하워드 휴즈 의학연구소(1953).</li>
          <li>마지막: 1976년 4월 5일, 비행기 안에서 사망.</li>
        </ul>
      </Section>
    </Wrap>
  );
}
