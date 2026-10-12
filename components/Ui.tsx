import Link from "next/link";
import type { Verdict } from "@/data/hughes";
import { VERDICT_LABEL } from "@/data/hughes";

const tone: Record<Verdict, string> = {
  fact: "border-sky/40 bg-sky/10 text-sky",
  changed: "border-terra/40 bg-terra/10 text-terra",
  invented: "border-red-800/30 bg-red-800/10 text-red-800",
  legend: "border-muted/40 bg-stone text-muted",
};

export function VerdictBadge({ v }: { v: Verdict }) {
  return <span className={`inline-block shrink-0 rounded-full border px-2 py-0.5 text-[11px] ${tone[v]}`}>{VERDICT_LABEL[v]}</span>;
}

export function Section({ title, en, children }: { title: string; en?: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-ink">
        {title} {en ? <span className="ml-1 text-sm font-normal text-muted">{en}</span> : null}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Card({ href, title, sub, children }: { href?: string; title: string; sub?: string; children?: React.ReactNode }) {
  const inner = (
    <>
      <p className="font-serif text-lg text-ink">{title}</p>
      {sub ? <p className="text-xs text-terra">{sub}</p> : null}
      {children ? <div className="mt-2 text-sm leading-7 text-muted">{children}</div> : null}
    </>
  );
  const cls = "block rounded-lg border border-line bg-card p-4";
  return href ? <Link href={href} className={`${cls} hover:border-terra`}>{inner}</Link> : <div className={cls}>{inner}</div>;
}

export function Wrap({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl px-4 py-6">{children}</div>;
}

export function SpoilerNote() {
  return <p className="mt-4 rounded-md border border-terra/40 bg-terra/5 px-3 py-2 text-sm text-terra">⚠ 결말까지 모두 나오는 스포일러가 있습니다. 줄거리는 우리말로 다시 쓴 요약입니다.</p>;
}

export function Legend() {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
      표시: <VerdictBadge v="fact" /> 기록과 맞음 <VerdictBadge v="changed" /> 시간·세부를 바꿈 <VerdictBadge v="invented" /> 영화가 만든 것 <VerdictBadge v="legend" /> 확인되지 않음
    </p>
  );
}
