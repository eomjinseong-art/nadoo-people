import { notFound } from "next/navigation";
import { StorySources } from "@/components/StoryViews";
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
  return pageMetadata({ title: `${p.name} 출처와 이미지 라이선스`, description: s.metaDesc, path: `/people/${s.slug}/sources` });
}
export default async function Page({ params }: P) {
  const s = storyBySlug((await params).slug);
  if (!s) notFound();
  return <StorySources s={s} />;
}
