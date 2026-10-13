import { notFound } from "next/navigation";
import { StoryTimeline } from "@/components/StoryViews";
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
  return pageMetadata({ title: `${p.name} 실제 연표 · ${s.film.ko}`, description: s.metaDesc, path: `/people/${s.slug}/timeline` });
}
export default async function Page({ params }: P) {
  const s = storyBySlug((await params).slug);
  if (!s) notFound();
  return <StoryTimeline s={s} />;
}
