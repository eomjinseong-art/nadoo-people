"use client";
import { useState } from "react";
import { QUIZ as HUGHES } from "@/data/hughes";
import { CoupangCard } from "@/components/CoupangCard";

type QItem = { q: string; options: readonly string[] | string[]; answer: number; why: string };

export function Quiz({ items }: { items?: readonly QItem[] }) {
  const QUIZ: readonly QItem[] = items ?? HUGHES;
  const [picked, setPicked] = useState<(number | null)[]>(QUIZ.map(() => null));
  const score = picked.filter((p, i) => p === QUIZ[i].answer).length;
  const done = picked.every((p) => p !== null);
  return (
    <div className="mt-6 space-y-4">
      {QUIZ.map((q, i) => (
        <fieldset key={i} className="rounded-lg border border-line bg-card p-4">
          <legend className="px-1 font-serif text-lg">{i + 1}. {q.q}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {q.options.map((o, j) => {
              const p = picked[i];
              const state = p === null ? "" : j === q.answer ? "border-sky bg-sky/10 text-sky" : p === j ? "border-red-800 bg-red-800/10 text-red-800" : "opacity-60";
              return (
                <button key={j} type="button" disabled={p !== null} onClick={() => setPicked((s) => s.map((x, k) => (k === i ? j : x)))} className={`rounded-full border border-line px-3 py-1.5 text-sm ${state}`}>
                  {o}
                </button>
              );
            })}
          </div>
          {picked[i] !== null ? <p className="mt-2 text-sm text-muted">{picked[i] === q.answer ? "정답! " : "아쉬워요. "}{q.why}</p> : null}
        </fieldset>
      ))}
      <div className="sticky bottom-3 rounded-lg border border-terra bg-bg p-3 text-center text-sm">
        점수 {score} / {QUIZ.length} {done ? (score >= 10 ? (items ? "· 부츠 장인 👢" : "· 휴즈 박사 ✈") : score >= 6 ? "· 잘했어요!" : "· 다시 해 볼까요?") : ""}
        {done ? <button type="button" className="ml-3 underline" onClick={() => setPicked(QUIZ.map(() => null))}>다시 풀기</button> : null}
      </div>
      {done ? <CoupangCard /> : null}
    </div>
  );
}
