/**
 * People registry. To add a person: add one entry here and create app/people/<slug>/ pages
 * (plus a 2-line layout.tsx that renders <PersonTabs slug="..." />).
 */
export type Field = "사업가" | "발명가" | "예술가" | "군인" | "비행사" | "영화인" | "정치인" | "과학자";
export type Era = "19세기 이전" | "19세기" | "20세기 전반" | "20세기 후반" | "21세기";
export type Person = {
  slug: string;
  name: string;
  en: string;
  years: string;
  fields: Field[];
  country: string;
  era: Era;
  works: { title: string; kind: "영화" | "뮤지컬" | "드라마" | "다큐" }[];
  film: string;
  oneLine: string;
  img: string;
  imgAlt: string;
  added: string; // YYYY-MM-DD
  featured?: boolean;
  tabs: { href: string; label: string }[]; // relative to /people/<slug>
};

export const PEOPLE: Person[] = [
  {
    slug: "howard-hughes",
    name: "하워드 휴즈",
    en: "Howard Hughes",
    years: "1905–1976",
    fields: ["사업가", "비행사", "영화인", "발명가"],
    country: "미국",
    era: "20세기 전반",
    works: [{ title: "에비에이터 (2004)", kind: "영화" }],
    film: "에비에이터 (The Aviator, 2004)",
    oneLine: "영화를 찍고, 비행기를 만들고, 세상에서 가장 부자였다가 스스로를 가둔 사람.",
    img: "/img/hughes-1938.jpg",
    imgAlt: "하워드 휴즈 사진",
    added: "2026-10-12",
    featured: true,
    tabs: [
      { href: "", label: "개요" },
      { href: "/aviator", label: "에비에이터 장면별" },
      { href: "/cast", label: "배우와 실제" },
      { href: "/timeline", label: "연표" },
      { href: "/aircraft", label: "비행기" },
      { href: "/films", label: "그가 만든 영화" },
      { href: "/ocd", label: "강박장애" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/related", label: "함께 볼 영화" },
    ],
  },
  {
    slug: "steve-pateman",
    name: "스티브 패이트먼",
    en: "Steve Pateman",
    years: "W.J. 브룩스 사장 · 1990년대",
    fields: ["사업가"],
    country: "영국",
    era: "20세기 후반",
    works: [{ title: "킹키 부츠 (2005)", kind: "영화" }, { title: "킹키부츠 (2012)", kind: "뮤지컬" }],
    film: "킹키 부츠 (Kinky Boots, 2005 영화 · 2012 뮤지컬)",
    oneLine: "문 닫기 직전의 시골 구두 공장을 ‘남자도 신는 하이힐 부츠’로 버텨 낸 사장. 롤라는 실존했을까?",
    img: "/img/earls-barton-village.jpg",
    imgAlt: "얼스 바턴 마을 풍경 (퍼블릭 도메인)",
    added: "2026-10-13",
    featured: true,
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline", label: "실제 연표" },
      { href: "/compare", label: "영화·뮤지컬 vs 실제" },
      { href: "/people", label: "관련 인물" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/sources", label: "출처" },
    ],
  },
];

export const personBySlug = (s: string) => PEOPLE.find((p) => p.slug === s);
export const RECENT = [...PEOPLE].sort((a, b) => b.added.localeCompare(a.added));
export const FEATURED = PEOPLE.filter((p) => p.featured);
export const ALL_FIELDS = [...new Set(PEOPLE.flatMap((p) => p.fields))];
export const ALL_COUNTRIES = [...new Set(PEOPLE.map((p) => p.country))];
export const ERA_ORDER: Era[] = ["19세기 이전", "19세기", "20세기 전반", "20세기 후반", "21세기"];
export const ALL_ERAS = ERA_ORDER.filter((e) => PEOPLE.some((p) => p.era === e));
