import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { CHECKLIST_URL, MUSICAL_URL, PatemanCrumbs } from "@/components/PatemanCrumbs";
import { Card, Section, VerdictBadge, Wrap } from "@/components/Ui";
import { FACTORY, LOLA, P } from "@/data/pateman";
import { canonicalUrl, jsonLd, pageMetadata } from "@/lib/seo";

const desc = "킹키 부츠의 실제 주인공 스티브 패이트먼과 노샘프턴셔 얼스 바턴의 구두 공장 W.J. 브룩스. 디바인 부츠, BBC 다큐(1999), 공장의 폐업, 영화(2005)·뮤지컬(2012)과 실제 비교, 롤라는 실존했나?";
export const metadata = pageMetadata({ title: "스티브 패이트먼 Steve Pateman · 킹키 부츠의 실제 이야기", description: desc, path: P });

const MENU = [
  { href: `${P}/timeline`, title: "실제 이야기 연표", sub: "1889–2000 그리고 이후", text: "가업, 위기, 디바인 부츠, BBC 다큐, 공장의 마지막." },
  { href: `${P}/compare`, title: "영화·뮤지컬 vs 실제", sub: "사실 · 각색 · 창작 · 전해지는 이야기", text: "찰리, 롤라, 밀라노, 팔씨름… 무엇이 진짜일까." },
  { href: `${P}/people`, title: "관련 인물", sub: "People", text: "패이트먼, 수 셰퍼드, 그리고 롤라." },
  { href: `${P}/quiz`, title: "퀴즈", sub: "12문제", text: "얼스 바턴에서 브로드웨이까지." },
  { href: `${P}/sources`, title: "출처", sub: "Sources", text: "BBC, 텔레그래프, 노샘프턴 박물관." },
];

export default function Hub() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([{ "@type": "Person", name: "Steve Pateman", alternateName: "스티브 패이트먼", url: canonicalUrl(P), description: "Owner of the Earls Barton shoe factory W.J. Brooks whose story inspired Kinky Boots." }])} />
      <PatemanCrumbs />
      <div className="mt-4 grid gap-6 sm:grid-cols-[240px_1fr]">
        <figure>
          <Image src="/img/earls-barton-village.jpg" alt="노샘프턴셔 얼스 바턴 마을 풍경" width={661} height={478} className="w-full rounded-lg object-cover" priority />
          <figcaption className="mt-1 text-[11px] text-muted">얼스 바턴 마을. Kev747, 퍼블릭 도메인 (<a className="underline" href="https://commons.wikimedia.org/wiki/File:Earls_Barton_village,_Northamptonshire,_UK.jpg">위키미디어 공용</a>)</figcaption>
        </figure>
        <div>
          <PageHead kicker="STEVE PATEMAN · KINKY BOOTS" title="스티브 패이트먼" lead="100년 넘게 남자 구두를 만든 시골 공장의 4대째 사장. 문 닫기 직전, 한 통의 전화로 ‘남자가 신을 수 있는 하이힐 부츠’를 만들기 시작했습니다. 그 이야기가 BBC 다큐가 되고, 영화가 되고, 브로드웨이 뮤지컬이 됐습니다." />
          <p className="mt-3 text-sm leading-7 text-muted">
            🏭 공장: <b className="text-ink">{FACTORY.name}</b> · {FACTORY.place}
            <br />🎬 영화 『킹키 부츠』 (Kinky Boots, 2005) · 감독 줄리언 재럴드
            <br />🎭 뮤지컬 『킹키부츠』 (2012 시카고, 2013 브로드웨이) · <a className="text-terra underline" href={MUSICAL_URL}>나두뮤지컬에서 작품 보기</a>
            <br />✅ <a className="underline" href={CHECKLIST_URL}>영화봇 ‘뮤지컬 영화’ 체크리스트</a>에 킹키 부츠(2005)가 있어요.
          </p>
          <p className="mt-2 text-xs text-muted">{FACTORY.spelling}</p>
        </div>
      </div>
      <Section title={LOLA.title} en="Was Lola real?">
        <p className="rounded-md border border-terra/40 bg-terra/5 px-3 py-2 text-sm"><b>{LOLA.short}</b></p>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {LOLA.points.map((p) => (
            <li key={p.label} className="flex items-start gap-2"><VerdictBadge v={p.verdict} /><span><b>{p.label}:</b> {p.text}</span></li>
          ))}
        </ul>
      </Section>
      <Section title="둘러보기" en="Explore">
        <div className="grid gap-3 sm:grid-cols-2">{MENU.map((m) => <Card key={m.href} href={m.href} title={m.title} sub={m.sub}>{m.text}</Card>)}</div>
      </Section>
      <figure className="mt-10 overflow-hidden rounded-lg border border-line bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/red-boot-ai.webp" alt="구두 공장 작업대 위의 빨간 부츠 (AI 일러스트)" width={1200} height={800} className="h-56 w-full object-cover sm:h-72" loading="lazy" />
        <figcaption className="px-3 py-1.5 text-[11px] text-muted">🎨 AI 일러스트 (gpt-image-1) · 실제 제품·공장 사진이 아닙니다. 사람을 그리지 않았습니다.</figcaption>
      </figure>
    </Wrap>
  );
}
