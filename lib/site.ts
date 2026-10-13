export const SITE_NAME = "나두인물";
export const SITE_NAME_EN = "Nadoo People";
export const SITE_TAGLINE = "영화로 만나고, 실제 삶으로 깊이 들어가는 인물 탐험";
export const SITE_SUB = "영화 한 편을 장면별로 따라가고, 영화와 실제가 어디서 갈리는지 비교합니다. 확인되지 않은 이야기는 ‘전해지는 이야기’로 표시합니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-people.vercel.app";
export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/people", label: "인물 전체" },
  { href: "/fields", label: "분야별" },
  { href: "/eras", label: "시대별" },
  { href: "/search", label: "검색" },
] as const;

export const FOOTER_LINKS = [...NAV, { href: "/sources", label: "출처" }] as const;

export const SISTER_SITES = [
  { href: "https://nadoo-timeline.vercel.app", label: "나두연표" },
  { href: "https://nadoo-world.vercel.app", label: "나두세계" },
  { href: "https://nadoo-arts.vercel.app", label: "나두예술" },
  { href: "https://nadoo-musical.vercel.app", label: "나두뮤지컬" },
  { href: "https://the-chosen-korean.vercel.app", label: "더 초즌" },
  { href: "https://rome-stories.vercel.app", label: "로마이야기" },
  { href: "https://tinalinkeom.vercel.app", label: "나두 허브" },
] as const;
