import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PersonCard } from "@/components/PersonCard";
import { Section, Wrap } from "@/components/Ui";
import { FEATURED, PEOPLE, RECENT } from "@/data/people";
import { itemListLd, jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";
import { CoupangCard } from "@/components/CoupangCard";

export const metadata = pageMetadata({ title: "나두인물", description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([websiteLd(SITE_TAGLINE), itemListLd("인물 목록", "/people", PEOPLE.map((p) => ({ name: `${p.name} (${p.en})`, path: `/people/${p.slug}` })))])} />
      <p className="text-xs tracking-[0.2em] text-terra">NADOO PEOPLE · 영화로 만나는 실존 인물</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">영화 한 편으로 시작해서,<br />한 사람의 진짜 삶까지.</h1>
      <p className="mt-4 max-w-3xl leading-8 text-muted">{SITE_SUB}</p>
      <Section title="새로 온 인물" en="Recently added">
        <ul className="grid gap-4 sm:grid-cols-2">{RECENT.slice(0, 4).map((p) => <li key={p.slug}><PersonCard p={p} /></li>)}</ul>
      </Section>
      <CoupangCard />
      <Section title="추천 인물" en="Featured">
        <ul className="grid gap-4 sm:grid-cols-2">{FEATURED.slice(0, 6).map((p) => <li key={p.slug}><PersonCard p={p} /></li>)}</ul>
      </Section>
      <p className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link href="/people" className="rounded-full border border-terra px-4 py-2 text-terra">인물 전체 {PEOPLE.length}명 →</Link>
        <Link href="/fields" className="rounded-full border border-line px-4 py-2">분야별</Link>
        <Link href="/eras" className="rounded-full border border-line px-4 py-2">시대별</Link>
        <Link href="/search" className="rounded-full border border-line px-4 py-2">검색</Link>
      </p>
    </Wrap>
  );
}
