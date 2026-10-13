import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Quiz } from "@/components/Quiz";
import { Card, Legend, Section, VerdictBadge, Wrap } from "@/components/Ui";
import { personBySlug } from "@/data/people";
import { CHECKLIST_TRUE, type Story } from "@/data/stories";
import { breadcrumbLd, canonicalUrl, jsonLd } from "@/lib/seo";

const base = (s: Story) => `/people/${s.slug}`;

export function StoryCrumbs({ s, label, sub }: { s: Story; label?: string; sub?: string }) {
  const p = personBySlug(s.slug)!;
  const items = [{ name: "홈", path: "/" }, { name: p.name, path: base(s) }, ...(label && sub ? [{ name: label, path: base(s) + sub }] : [])];
  return (
    <>
      <JsonLd data={jsonLd([breadcrumbLd(items)])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, label ? { href: base(s), label: p.name } : { label: p.name }, ...(label ? [{ label }] : [])]} />
    </>
  );
}

function Credit({ i }: { i: Story["images"][number] }) {
  return (
    <>
      {i.credit} · {i.licenseUrl ? <a className="underline" href={i.licenseUrl}>{i.license}</a> : i.license} (<a className="underline" href={i.page}>위키미디어 공용</a>)
    </>
  );
}

function CareNote({ s }: { s: Story }) {
  return s.careNote ? <p className="mt-4 rounded-md border border-sky/40 bg-sky/5 px-3 py-2 text-sm leading-7">💙 {s.careNote}</p> : null;
}

export function StoryHub({ s }: { s: Story }) {
  const p = personBySlug(s.slug)!;
  const menu = [
    { href: "/timeline", title: s.timelines.length > 1 ? "세 사람의 실제 연표" : "실제 연표", sub: "Timeline", text: s.timelines.map((t) => t.who.split(" (")[0]).join(" · ") },
    { href: "/compare", title: "영화 vs 실제", sub: "사실 · 각색 · 창작 · 전해지는 이야기", text: `${s.compare.length}장의 비교 카드` },
    { href: "/people", title: "관련 인물", sub: "People", text: s.people.map((x) => x.name).slice(0, 4).join(", ") },
    { href: "/quiz", title: "퀴즈", sub: `${s.quiz.length}문제`, text: "얼마나 알고 있을까?" },
    { href: "/sources", title: "출처", sub: "Sources", text: "이미지 라이선스와 확인되지 않은 부분도 함께." },
  ];
  return (
    <Wrap>
      <JsonLd data={jsonLd([{ "@type": "Person", name: p.en, alternateName: p.name, url: canonicalUrl(base(s)), description: s.metaDesc }])} />
      <StoryCrumbs s={s} />
      <div className={`mt-4 grid gap-6 ${s.images.length > 1 ? "" : "sm:grid-cols-[240px_1fr]"}`}>
        <div className={s.images.length > 1 ? "grid grid-cols-3 gap-2 sm:gap-4" : ""}>
          {s.images.map((i, k) => (
            <figure key={i.src}>
              <Image src={i.src} alt={i.alt} width={i.w} height={i.h} className="w-full rounded-lg object-cover" priority={k === 0} />
              <figcaption className="mt-1 text-[11px] leading-4 text-muted"><Credit i={i} /></figcaption>
            </figure>
          ))}
        </div>
        <div>
          <PageHead kicker={s.kicker} title={s.title} lead={s.lead} />
          <p className="mt-3 text-sm leading-7 text-muted">
            🎬 영화 『{s.film.ko}』 ({s.film.en}, {s.film.year}) · 감독 {s.film.director} · 출연 {s.film.cast}
            <br />📖 {s.film.note}
            <br />✅ <a className="text-terra underline" href={`${CHECKLIST_TRUE}#film-${s.checklistId}`}>영화봇 ‘실화 영화’ 체크리스트에서 보기</a>
          </p>
        </div>
      </div>
      <CareNote s={s} />
      <Section title="한눈에 보기" en="At a glance">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7">{s.glance.map((g) => <li key={g}>{g}</li>)}</ul>
      </Section>
      <Section title="둘러보기" en="Explore">
        <div className="grid gap-3 sm:grid-cols-2">{menu.map((m) => <Card key={m.href} href={base(s) + m.href} title={m.title} sub={m.sub}>{m.text}</Card>)}</div>
      </Section>
    </Wrap>
  );
}

export function StoryTimeline({ s }: { s: Story }) {
  return (
    <Wrap>
      <StoryCrumbs s={s} label="실제 연표" sub="/timeline" />
      <PageHead kicker="REAL TIMELINE" title={`${s.title} · 실제 연표`} lead="영화가 아니라 기록에 남은 순서대로 정리했습니다. 표시가 붙은 항목은 영화에도 나오는 장면입니다." />
      {s.timelines.length > 1 ? (
        <nav className="mt-4 flex flex-wrap gap-2 text-sm">{s.timelines.map((t) => <a key={t.id} href={`#${t.id}`} className="rounded-full border border-line px-3 py-1">{t.who.split(" (")[0]}</a>)}</nav>
      ) : null}
      {s.timelines.map((t) => (
        <Section key={t.id} id={t.id} title={t.who}>
          <ol className="relative space-y-3 border-l border-line pl-5">
            {t.items.map((it, k) => (
              <li key={k} className="text-sm leading-7">
                <span className="absolute -left-[5px] mt-2.5 h-2.5 w-2.5 rounded-full bg-terra" />
                <b className="mr-2 font-serif text-ink">{it.year}</b>{it.text} {it.tag ? <VerdictBadge v={it.tag} /> : null}
              </li>
            ))}
          </ol>
        </Section>
      ))}
    </Wrap>
  );
}

export function StoryCompare({ s }: { s: Story }) {
  return (
    <Wrap>
      <StoryCrumbs s={s} label="영화 vs 실제" sub="/compare" />
      <PageHead kicker="FILM VS REAL" title={`『${s.film.ko}』 vs 실제`} lead="영화는 다큐가 아닙니다. 어디까지가 기록이고 어디부터 극적 장치인지 카드로 나눴습니다." />
      <CareNote s={s} />
      <Legend />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {s.compare.map((c) => (
          <article key={c.topic} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <div className="flex items-start justify-between gap-2"><h2 className="font-serif text-lg">{c.topic}</h2><VerdictBadge v={c.verdict} /></div>
            <p className="mt-1"><b>🎬 영화:</b> {c.show}</p>
            <p className="text-muted"><b className="text-ink">📜 실제:</b> {c.real}</p>
          </article>
        ))}
      </div>
    </Wrap>
  );
}

export function StoryPeople({ s }: { s: Story }) {
  return (
    <Wrap>
      <StoryCrumbs s={s} label="관련 인물" sub="/people" />
      <PageHead kicker="PEOPLE INVOLVED" title="관련 인물" lead="영화 속 인물이 실존했는지, 이름이나 역할이 바뀌었는지 정리했습니다. 실존 인물의 AI 초상은 쓰지 않습니다." />
      <Legend />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {s.people.map((x) => (
          <article key={x.name} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <div className="flex items-start justify-between gap-2"><h2 className="font-serif text-lg">{x.name} <span className="text-xs text-muted">{x.en}</span></h2><VerdictBadge v={x.verdict} /></div>
            <p className="text-xs text-muted">{x.role}</p>
            <p className="mt-1"><b>🎬 영화:</b> {x.show}</p>
            <p className="text-muted"><b className="text-ink">📜 실제:</b> {x.real}</p>
          </article>
        ))}
      </div>
    </Wrap>
  );
}

export function StoryQuiz({ s }: { s: Story }) {
  return (
    <Wrap>
      <StoryCrumbs s={s} label="퀴즈" sub="/quiz" />
      <PageHead kicker="QUIZ" title={`${s.title} 퀴즈 ${s.quiz.length}문제`} lead="정답을 고르면 바로 해설이 나옵니다." />
      <Quiz items={s.quiz} badge="실화 박사 🎓" />
    </Wrap>
  );
}

export function StorySources({ s }: { s: Story }) {
  return (
    <Wrap>
      <StoryCrumbs s={s} label="출처" sub="/sources" />
      <PageHead kicker="SOURCES" title="출처와 라이선스" lead="사실 확인에 쓴 자료, 이미지 라이선스, 그리고 확인하지 못한 부분입니다. 인용문은 출처가 확인된 짧은 문장만 썼습니다." />
      <Section title="참고 자료" en="References">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7">{s.sources.map(([t, u]) => <li key={u}><a className="underline" href={u}>{t}</a></li>)}</ul>
      </Section>
      <Section title="이미지" en="Images">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7">{s.images.map((i) => <li key={i.src}>{i.alt}: <Credit i={i} /></li>)}</ul>
        <p className="mt-2 text-xs text-muted">영화 스틸컷과 예고편은 저작권 때문에 쓰지 않았습니다.</p>
      </Section>
      <Section title="확인하지 못한 부분" en="Uncertain">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7">{s.uncertain.map((u) => <li key={u}>{u}</li>)}</ul>
      </Section>
    </Wrap>
  );
}
