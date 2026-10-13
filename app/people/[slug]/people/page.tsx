import { notFound } from "next/navigation";
import { StoryPeople } from "@/components/StoryViews";
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
  return pageMetadata({ title: `${s.film.ko} 관련 인물 · 실존과 각색`, description: s.metaDesc, path: `/people/${s.slug}/people` });
}
export default async function Page({ params }: P) {
  const s = storyBySlug((await params).slug);
  if (!s) notFound();
  return <StoryPeople s={s} />;
}
