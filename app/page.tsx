import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Wrap } from "@/components/Ui";
import { PEOPLE } from "@/data/people";
import { itemListLd, jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({ title: "나두인물", description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  return (
    <Wrap>
      <JsonLd data={jsonLd([websiteLd(SITE_TAGLINE), itemListLd("인물 목록", "/", PEOPLE.map((p) => ({ name: `${p.name} (${p.en})`, path: `/people/${p.slug}` })))])} />
      <p className="text-xs tracking-[0.2em] text-terra">NADOO PEOPLE · 영화로 만나는 실존 인물</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">영화 한 편으로 시작해서,<br />한 사람의 진짜 삶까지.</h1>
      <p className="mt-4 max-w-3xl leading-8 text-muted">{SITE_SUB}</p>
      <h2 className="mt-10 font-serif text-2xl">인물 목록 <span className="text-sm text-muted">People</span></h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {PEOPLE.map((p) => (
          <li key={p.slug}>
            <Link href={`/people/${p.slug}`} className="flex gap-4 rounded-lg border border-line bg-card p-4 hover:border-terra">
              <Image src={p.img} alt={p.imgAlt} width={96} height={120} className="h-[120px] w-[96px] rounded object-cover grayscale" />
              <div>
                <p className="font-serif text-xl">{p.name}</p>
                <p className="text-xs text-muted">{p.en} · {p.years}</p>
                <p className="mt-1 text-sm text-terra">🎬 {p.film}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{p.oneLine}</p>
              </div>
            </Link>
          </li>
        ))}
        <li className="flex items-center justify-center rounded-lg border border-dashed border-line p-4 text-sm text-muted">다음 인물을 준비하고 있어요 · More coming</li>
      </ul>
    </Wrap>
  );
}
