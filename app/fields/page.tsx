import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { PersonCard } from "@/components/PersonCard";
import { Section, Wrap } from "@/components/Ui";
import { ALL_FIELDS, PEOPLE } from "@/data/people";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "분야별 인물", description: "사업가, 발명가, 비행사, 영화인 등 분야별로 나눈 인물.", path: "/fields" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="BY FIELD" title="분야별 인물" lead="한 사람이 여러 분야에 들어갈 수 있습니다." />
      <p className="mt-4 flex flex-wrap gap-2 text-sm">{ALL_FIELDS.map((g) => <a key={g} href={`#${g}`} className="rounded-full border border-line px-3 py-1 hover:border-terra">{g}</a>)}</p>
      {ALL_FIELDS.map((g) => (
        <Section key={g} id={g} title={g}>
          <ul className="grid gap-4 sm:grid-cols-2">{PEOPLE.filter((p) => p.fields.includes(g)).map((p) => <li key={p.slug}><PersonCard p={p} /></li>)}</ul>
          <p className="mt-2 text-xs"><Link className="underline" href={`/people?field=${encodeURIComponent(g)}`}>인물 전체에서 ‘{g}’로 거르기 →</Link></p>
        </Section>
      ))}
    </Wrap>
  );
}
