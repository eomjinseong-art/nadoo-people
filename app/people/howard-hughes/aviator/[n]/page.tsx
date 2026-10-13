import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Legend, Section, SpoilerNote, VerdictBadge, Wrap } from "@/components/Ui";
import { CAST, CHAPTERS } from "@/data/hughes";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

const base = "/people/howard-hughes/aviator";
export const dynamicParams = false;
export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ n: c.slug }));
}

type P = { params: Promise<{ n: string }> };
export async function generateMetadata({ params }: P) {
  const { n } = await params;
  const c = CHAPTERS.find((x) => x.slug === n);
  if (!c) return {};
  return pageMetadata({ title: `에비에이터 ${c.n}장 ${c.title} · 줄거리와 실화`, description: `${c.span}. ${c.plot[0]}`, path: `${base}/${c.slug}`, type: "article" });
}

export default async function ChapterPage({ params }: P) {
  const { n } = await params;
  const i = CHAPTERS.findIndex((x) => x.slug === n);
  if (i < 0) notFound();
  const c = CHAPTERS[i];
  const prev = CHAPTERS[i - 1];
  const next = CHAPTERS[i + 1];
  const path = `${base}/${c.slug}`;
  return (
    <Wrap>
      <JsonLd data={jsonLd([
        breadcrumbLd([{ name: "홈", path: "/" }, { name: "하워드 휴즈", path: "/people/howard-hughes" }, { name: "에비에이터", path: base }, { name: `${c.n}장`, path }]),
        articleLd({ headline: `에비에이터 ${c.n}장 ${c.title}`, description: c.plot[0], path, about: ["The Aviator", "Howard Hughes"] }),
      ])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people/howard-hughes", label: "하워드 휴즈" }, { href: base, label: "에비에이터" }, { label: `${c.n}장` }]} />
      <PageHead kicker={`CHAPTER ${c.n} · ${c.en.toUpperCase()}`} title={`${c.n}장. ${c.title}`} lead={c.span} />
      <SpoilerNote />
      <Section title="줄거리" en="Plot">
        <div className="space-y-4 leading-8">
          {c.plot.map((p, k) => <p key={k}>{p}</p>)}
        </div>
      </Section>
      <Section title="기억할 장면" en="Key scenes">
        <ul className="list-disc space-y-2 pl-5 leading-7">
          {c.scenes.map((s, k) => <li key={k}>{s}</li>)}
        </ul>
      </Section>
      <CoupangCard />
      <Section title="영화 vs 실제" en="Film vs Reality">
        <Legend />
        <div className="mt-3 space-y-3">
          {c.compare.map((x, k) => (
            <div key={k} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
              <div className="flex items-start gap-2"><VerdictBadge v={x.verdict} /><p><b>영화:</b> {x.film}</p></div>
              <p className="mt-1 text-muted"><b className="text-ink">실제:</b> {x.real}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="이 장의 인물" en="People in this chapter">
        <ul className="flex flex-wrap gap-2 text-sm">
          {c.cast.map((k) => (
            <li key={k}><Link href={`/people/howard-hughes/cast#${k}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 hover:border-terra">{CAST[k].real} · {CAST[k].actor}</Link></li>
          ))}
        </ul>
      </Section>
      <nav className="mt-10 flex justify-between gap-3 text-sm">
        {prev ? <Link href={`${base}/${prev.slug}`} className="rounded border border-line px-3 py-2 hover:border-terra">← {prev.n}장 {prev.title}</Link> : <Link href={base} className="rounded border border-line px-3 py-2">← 목차</Link>}
        {next ? <Link href={`${base}/${next.slug}`} className="rounded border border-line px-3 py-2 hover:border-terra">{next.n}장 {next.title} →</Link> : <Link href="/people/howard-hughes/timeline" className="rounded border border-line px-3 py-2 hover:border-terra">영화 그 후, 연표 →</Link>}
      </nav>
    </Wrap>
  );
}
