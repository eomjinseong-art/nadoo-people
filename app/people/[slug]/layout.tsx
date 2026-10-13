import { PersonTabs } from "@/components/PersonTabs";
import { STORIES } from "@/data/stories";
export const dynamicParams = false;
export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (<><PersonTabs slug={slug} />{children}</>);
}
