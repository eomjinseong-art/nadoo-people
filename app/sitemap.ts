import type { MetadataRoute } from "next";
import { CHAPTERS } from "@/data/hughes";
import { SITE_URL } from "@/lib/site";
import { STORIES, STORY_SUBPAGES } from "@/data/stories";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const h = "/people/howard-hughes";
  const paths = ["/", "/people", "/fields", "/eras", "/search", h, `${h}/aviator`, ...CHAPTERS.map((c) => `${h}/aviator/${c.slug}`), `${h}/cast`, `${h}/timeline`, `${h}/aircraft`, `${h}/films`, `${h}/ocd`, `${h}/quiz`, `${h}/related`, "/sources", ...["", "/timeline", "/compare", "/people", "/quiz", "/sources"].map((x) => `/people/steve-pateman${x}`), ...STORIES.flatMap((st) => STORY_SUBPAGES.map((x) => `/people/${st.slug}${x}`))];
  return paths.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, lastModified: new Date("2026-10-12"), priority: p === "/" ? 1 : 0.7 }));
}
