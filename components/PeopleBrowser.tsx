"use client";
import { useEffect, useMemo, useState } from "react";
import { PersonCard } from "@/components/PersonCard";
import { ALL_COUNTRIES, ALL_ERAS, ALL_FIELDS, PEOPLE } from "@/data/people";

const sel = "rounded-md border border-line bg-card px-2 py-2 text-sm";

export function PeopleBrowser({ autoFocus = false }: { autoFocus?: boolean }) {
  const [q, setQ] = useState("");
  const [field, setField] = useState("");
  const [country, setCountry] = useState("");
  const [era, setEra] = useState("");
  const [work, setWork] = useState("");
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setQ(sp.get("q") ?? ""); setField(sp.get("field") ?? ""); setCountry(sp.get("country") ?? ""); setEra(sp.get("era") ?? ""); setWork(sp.get("work") ?? "");
  }, []);
  const works = useMemo(() => [...new Set(PEOPLE.flatMap((p) => p.works.map((w) => w.kind)))], []);
  const list = PEOPLE.filter((p) => {
    const t = q.trim().toLowerCase();
    if (t && !`${p.name} ${p.en} ${p.film} ${p.oneLine}`.toLowerCase().includes(t)) return false;
    if (field && !p.fields.includes(field as never)) return false;
    if (country && p.country !== country) return false;
    if (era && p.era !== era) return false;
    if (work && !p.works.some((w) => w.kind === work)) return false;
    return true;
  });
  return (
    <div className="mt-6">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto_auto_auto]">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} autoFocus={autoFocus} placeholder="이름·영화로 찾기 (예: 휴즈, Kinky)" aria-label="인물 검색" className={sel} />
        <select value={field} onChange={(e) => setField(e.target.value)} aria-label="분야" className={sel}><option value="">분야 전체</option>{ALL_FIELDS.map((f) => <option key={f}>{f}</option>)}</select>
        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="나라" className={sel}><option value="">나라 전체</option>{ALL_COUNTRIES.map((f) => <option key={f}>{f}</option>)}</select>
        <select value={era} onChange={(e) => setEra(e.target.value)} aria-label="시대" className={sel}><option value="">시대 전체</option>{ALL_ERAS.map((f) => <option key={f}>{f}</option>)}</select>
        <select value={work} onChange={(e) => setWork(e.target.value)} aria-label="관련 작품" className={sel}><option value="">작품 전체</option>{works.map((f) => <option key={f}>{f}</option>)}</select>
      </div>
      <p className="mt-3 text-xs text-muted">{list.length}명 / 전체 {PEOPLE.length}명</p>
      <ul className="mt-3 grid gap-4 sm:grid-cols-2">
        {list.map((p) => <li key={p.slug}><PersonCard p={p} /></li>)}
      </ul>
      {list.length === 0 ? <p className="mt-6 text-sm text-muted">조건에 맞는 인물이 없어요.</p> : null}
    </div>
  );
}
