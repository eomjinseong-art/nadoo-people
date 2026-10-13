import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { P } from "@/data/pateman";
import { breadcrumbLd, jsonLd } from "@/lib/seo";

export function PatemanCrumbs({ label, path }: { label?: string; path?: string }) {
  const items = [{ name: "홈", path: "/" }, { name: "스티브 패이트먼", path: P }, ...(label && path ? [{ name: label, path }] : [])];
  return (
    <>
      <JsonLd data={jsonLd([breadcrumbLd(items)])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, label ? { href: P, label: "스티브 패이트먼" } : { label: "스티브 패이트먼" }, ...(label ? [{ label }] : [])]} />
    </>
  );
}

export const MUSICAL_URL = "https://nadoo-musical.vercel.app/musicals/kinky-boots";
export const CHECKLIST_URL = "https://movie-checklist-sigma.vercel.app/?list=musical";
