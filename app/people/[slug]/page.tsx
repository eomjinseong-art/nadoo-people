import { notFound } from "next/navigation";
import { StoryHub } from "@/components/StoryViews";
import { personBySlug } from "@/data/people";
import { STORIES, storyBySlug } from "@/data/stories";
import { pageMetadata } from "@/lib/seo";
type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: P) {
  const s = storyBySlug((await params).slug)!;
  const p = personBySlug(s.slug)!;
  return pageMetadata({ title: `${p.name} ${p.en} · 『${s.film.ko}』의 실제 이야기`, description: s.metaDesc, path: `/people/${s.slug}` });
}
export default async function Page({ params }: P) {
  const s = storyBySlug((await params).slug);
  if (!s) notFound();
  return <StoryHub s={s} />;
}
