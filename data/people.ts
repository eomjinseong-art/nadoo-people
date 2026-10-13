/**
 * People registry. To add a person: add one entry here and create app/people/<slug>/ pages
 * (plus a 2-line layout.tsx that renders <PersonTabs slug="..." />).
 */
export type Field = "사업가" | "발명가" | "예술가" | "군인" | "비행사" | "영화인" | "정치인" | "과학자" | "수학자" | "엔지니어" | "조종사" | "운동선수" | "선장";
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
  {
    slug: "hidden-figures",
    name: "캐서린 존슨 · 도로시 본 · 메리 잭슨",
    en: "Katherine Johnson · Dorothy Vaughan · Mary Jackson",
    years: "1910–2020",
    fields: ["수학자", "과학자", "엔지니어"],
    country: "미국",
    era: "20세기 후반",
    works: [{ title: "히든 피겨스 (2016)", kind: "영화" }],
    film: "히든 피겨스 (Hidden Figures, 2016)",
    oneLine: "분리된 사무실에서 우주 궤도를 계산한 세 흑인 여성. 세 사람의 실제 연표를 따로 봅니다.",
    img: "/img/katherine-johnson.jpg",
    imgAlt: "1983년 NASA에서 찍은 캐서린 존슨 사진 (퍼블릭 도메인)",
    added: "2026-10-14",
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline#katherine", label: "캐서린 존슨 연표" },
      { href: "/timeline#dorothy", label: "도로시 본 연표" },
      { href: "/timeline#mary", label: "메리 잭슨 연표" },
      { href: "/compare", label: "영화 vs 실제" },
      { href: "/people", label: "관련 인물" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/sources", label: "출처" },
    ],
  },
  {
    slug: "john-nash",
    name: "존 내시",
    en: "John Forbes Nash Jr.",
    years: "1928–2015",
    fields: ["수학자"],
    country: "미국",
    era: "20세기 후반",
    works: [{ title: "뷰티풀 마인드 (2001)", kind: "영화" }],
    film: "뷰티풀 마인드 (A Beautiful Mind, 2001)",
    oneLine: "게임이론을 바꾼 수학자. 조현병과 수십 년을 살았고 노벨상을 받았습니다. 영화가 바꾼 것은?",
    img: "/img/john-nash.jpg",
    imgAlt: "존 내시 초상 사진 (Peter Badge, CC BY-SA 3.0)",
    added: "2026-10-14",
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline", label: "실제 연표" },
      { href: "/compare", label: "영화 vs 실제" },
      { href: "/people", label: "관련 인물" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/sources", label: "출처" },
    ],
  },
  {
    slug: "sullenberger",
    name: "체슬리 설런버거",
    en: "Chesley \"Sully\" Sullenberger",
    years: "1951–",
    fields: ["조종사", "군인"],
    country: "미국",
    era: "21세기",
    works: [{ title: "설리: 허드슨강의 기적 (2016)", kind: "영화" }],
    film: "설리: 허드슨강의 기적 (Sully, 2016)",
    oneLine: "엔진 두 개를 잃은 여객기를 허드슨강에 내려 155명을 살린 기장. NTSB는 정말 그를 몰아붙였을까?",
    img: "/img/sullenberger.jpg",
    imgAlt: "체슬리 설런버거 공식 사진 (퍼블릭 도메인)",
    added: "2026-10-14",
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline", label: "실제 연표" },
      { href: "/compare", label: "영화 vs 실제" },
      { href: "/people", label: "관련 인물" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/sources", label: "출처" },
    ],
  },
  {
    slug: "bethany-hamilton",
    name: "베서니 해밀턴",
    en: "Bethany Hamilton",
    years: "1990–",
    fields: ["운동선수"],
    country: "미국",
    era: "21세기",
    works: [{ title: "소울 서퍼 (2011)", kind: "영화" }],
    film: "소울 서퍼 (Soul Surfer, 2011)",
    oneLine: "13살에 상어에게 팔을 잃고 한 달 만에 다시 파도에 오른 서퍼.",
    img: "/img/bethany-hamilton.jpg",
    imgAlt: "강연하는 베서니 해밀턴 (미 공군 사진, 퍼블릭 도메인)",
    added: "2026-10-14",
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline", label: "실제 연표" },
      { href: "/compare", label: "영화 vs 실제" },
      { href: "/people", label: "관련 인물" },
      { href: "/quiz", label: "퀴즈" },
      { href: "/sources", label: "출처" },
    ],
  },
  {
    slug: "richard-phillips",
    name: "리처드 필립스",
    en: "Richard Phillips",
    years: "1955–",
    fields: ["선장"],
    country: "미국",
    era: "21세기",
    works: [{ title: "캡틴 필립스 (2013)", kind: "영화" }],
    film: "캡틴 필립스 (Captain Phillips, 2013)",
    oneLine: "소말리아 해적에게 납치된 화물선의 선장. 영웅인가, 선원들의 반론은?",
    img: "/img/richard-phillips.jpg",
    imgAlt: "구출 직후 미 해군 함장과 함께 선 리처드 필립스 (미 해군 사진, 퍼블릭 도메인)",
    added: "2026-10-14",
    tabs: [
      { href: "", label: "개요" },
      { href: "/timeline", label: "실제 연표" },
      { href: "/compare", label: "영화 vs 실제" },
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
