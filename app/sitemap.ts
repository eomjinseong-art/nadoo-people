import type { MetadataRoute } from "next";
import { CHAPTERS } from "@/data/hughes";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const h = "/people/howard-hughes";
  const paths = ["/", h, `${h}/aviator`, ...CHAPTERS.map((c) => `${h}/aviator/${c.slug}`), `${h}/cast`, `${h}/timeline`, `${h}/aircraft`, `${h}/films`, `${h}/ocd`, `${h}/quiz`, `${h}/related`, "/sources"];
  return paths.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, lastModified: new Date("2026-10-12"), priority: p === "/" ? 1 : 0.7 }));
}
