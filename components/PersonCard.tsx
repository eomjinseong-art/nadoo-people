import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/data/people";

export function PersonCard({ p }: { p: Person }) {
  return (
    <Link href={`/people/${p.slug}`} className="flex h-full gap-4 rounded-lg border border-line bg-card p-4 hover:border-terra">
      <Image src={p.img} alt={p.imgAlt} width={96} height={120} className="h-[120px] w-[96px] shrink-0 rounded object-cover grayscale" />
      <div className="min-w-0">
        <p className="font-serif text-xl">{p.name}</p>
        <p className="text-xs text-muted">{p.en} · {p.years}</p>
        <p className="mt-1 text-sm text-terra">🎬 {p.film}</p>
        <p className="mt-1 flex flex-wrap gap-1">{p.fields.map((f) => <span key={f} className="rounded-full bg-stone px-2 py-0.5 text-[11px] text-muted">{f}</span>)}<span className="rounded-full bg-stone px-2 py-0.5 text-[11px] text-muted">{p.country} · {p.era}</span></p>
        <p className="mt-2 text-sm leading-6 text-muted">{p.oneLine}</p>
      </div>
    </Link>
  );
}
