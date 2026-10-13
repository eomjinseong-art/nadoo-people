import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { PersonCard } from "@/components/PersonCard";
import { Section, Wrap } from "@/components/Ui";
import { ALL_ERAS, PEOPLE } from "@/data/people";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "시대별 인물", description: "19세기, 20세기 전반·후반 등 시대별로 나눈 인물.", path: "/eras" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="BY ERA" title="시대별 인물" lead="이야기의 중심이 되는 시기 기준입니다." />
      <p className="mt-4 flex flex-wrap gap-2 text-sm">{ALL_ERAS.map((g) => <a key={g} href={`#${g}`} className="rounded-full border border-line px-3 py-1 hover:border-terra">{g}</a>)}</p>
      {ALL_ERAS.map((g) => (
        <Section key={g} id={g} title={g}>
          <ul className="grid gap-4 sm:grid-cols-2">{PEOPLE.filter((p) => p.era === g).map((p) => <li key={p.slug}><PersonCard p={p} /></li>)}</ul>
          <p className="mt-2 text-xs"><Link className="underline" href={`/people?era=${encodeURIComponent(g)}`}>인물 전체에서 ‘{g}’로 거르기 →</Link></p>
        </Section>
      ))}
    </Wrap>
  );
}
