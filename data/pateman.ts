/**
 * Steve Pateman × Kinky Boots (2005 film, 2012 musical).
 * Checked against: BBC News "Kinky Boots inspiration comes out of the shadows" (Vincent Dowd, 18 Jun 2013);
 * BBC Northamptonshire "Factory fact or film fiction?" (2005); The Telegraph, David Gritten (6 Oct 2005);
 * Northampton Museums timeline "Kinky Boots" (NMAG); Business Times Northamptonshire "The story behind the story";
 * Wikipedia "Kinky Boots (film)". Quotes are only those printed in these sources.
 */
import type { Verdict } from "./hughes";

export const P = "/people/steve-pateman";

export const FACTORY = {
  name: "W.J. 브룩스 (W.J. Brooks Ltd)",
  spelling: "철자는 자료마다 ‘W.J. Brooks’(노샘프턴 박물관·텔레그래프·위키백과)와 ‘W.J. Brookes’(BBC 뉴스 2013·BBC 노샘프턴셔·지역 경제지)로 갈립니다. 이 사이트는 두 표기를 모두 적습니다.",
  place: "잉글랜드 노샘프턴셔 얼스 바턴(Earls Barton) 마을",
};

export const LOLA = {
  title: "롤라는 ‘지어낸 사람’일까?",
  short: "인물 롤라는 창작이지만, 롤라가 상징하는 세계와 사람들은 실제였습니다.",
  points: [
    { label: "창작", verdict: "invented" as Verdict, text: "롤라(사이먼)라는 한 사람은 실제로 없었습니다. 패이트먼 본인이 2013년 BBC 인터뷰에서 ‘가장 큰 창작은 롤라라는 인물’이라고 말했습니다." },
    { label: "실제 바탕", verdict: "fact" as Verdict, text: "같은 인터뷰에서 그는 롤라가 ‘사업을 하며 만난 8~10명을 합친 인물’이라고 했습니다. 즉 순수한 상상이 아니라 실제 사람들의 합성(composite)입니다." },
    { label: "실제 계기", verdict: "fact" as Verdict, text: "사업 방향을 바꾼 계기는 드래그 퀸 디자이너가 아니라, 포크스턴에서 트랜스젠더·크로스드레서용 의류점 ‘레이시스(Lacies)’를 하던 수 셰퍼드(Sue Sheppard)의 전화였습니다. 남자 몸에 맞는 튼튼한 여성 구두를 구하기 어렵다는 고객의 필요가 출발점이었습니다." },
    { label: "실제 시장", verdict: "fact" as Verdict, text: "노샘프턴 박물관과 텔레그래프는 그 가게가 크로스드레서와 드래그 퀸이 즐겨 신는 허벅지까지 오는 빨강·검정 부츠를 팔았다고 적습니다. 드래그·페티시 시장이라는 배경은 실제입니다." },
    { label: "각색", verdict: "changed" as Verdict, text: "영화·뮤지컬은 이 모든 것을 ‘공장에 들어와 디자인을 이끄는 카리스마 있는 드래그 퀸’ 한 명에게 모았습니다. 실제로는 패이트먼이 고객과 가게들을 조사하며 직접 디자인했고(박물관), 카탈로그 모델도 본인이 섰습니다." },
  ],
};

export const TIMELINE: { year: string; text: string; tag?: Verdict }[] = [
  { year: "1889", text: "W.J. 브룩스 창업. 이후 4대에 걸쳐 얼스 바턴에서 구두를 만듭니다(노샘프턴 박물관).", tag: "fact" },
  { year: "20세기", text: "어부 장화, 군화, 패션 브로그, 비틀스 시대의 첼시 부츠와 윙클피커까지 만들었다고 지역 경제지는 전합니다.", tag: "legend" },
  { year: "1980년대", text: "기록적인 이익. 매출의 약 90%가 독일 수출이었다고 패이트먼은 회고합니다(BBC 2013).", tag: "fact" },
  { year: "1990년대", text: "강한 파운드화로 수출이 무너지고 값싼 수입품에 국내 주문도 줄어듭니다. 30대의 스티브 패이트먼이 아버지에게서 회사를 이어받습니다(BBC·텔레그래프).", tag: "fact" },
  { year: "1990년대 후반", text: "포크스턴 의류점 레이시스의 수 셰퍼드가 전화로 ‘남자 사이즈 여성 구두’를 제안합니다. 패이트먼은 굽 11.4cm(4½인치)를 다는 기계에 1만 2천 파운드를 투자하고, 남자 체중을 견디도록 금속 심을 넣은 부츠를 만듭니다.", tag: "fact" },
  { year: "1990년대 후반", text: "페티시·크로스드레싱용 라인 ‘디바인(Divine)’ 출시. 지역 경제지는 ‘프로바이더’, ‘레이디 프로바이더’ 브랜드도 함께 적습니다. 뒤셀도르프 신발 박람회 출품으로 관심을 끕니다.", tag: "fact" },
  { year: "1999.2.24", text: "BBC2 『Trouble at the Top: The Kinky Boot Factory』 방영. ‘킹키 부츠 공장’이라는 별명은 BBC가 붙였습니다. 시청자 약 430만 명(텔레그래프).", tag: "fact" },
  { year: "약 18개월 뒤", text: "BBC가 후속편을 찍으러 왔을 때 기록한 것은 공장의 폐업이었습니다.", tag: "fact" },
  { year: "2000", text: "W.J. 브룩스 폐업. 한동안 우편 주문 사업으로 버텼지만 그것도 접었고, 공장 터는 주택 부지로 팔렸습니다(BBC 2013).", tag: "fact" },
  { year: "2005.10", text: "영화 『킹키 부츠』 영국 개봉. 실제 촬영은 노샘프턴의 트리커스(Tricker's) 공장에서 많이 했습니다.", tag: "fact" },
  { year: "2012–2013", text: "신디 로퍼·하비 피어스타인의 뮤지컬이 2012년 시카고 시범 공연, 2013년 브로드웨이 개막, 토니상 6개 부문 수상.", tag: "fact" },
  { year: "2013", text: "BBC 인터뷰 당시 패이트먼은 전업 소방관으로 일하고 있었고, 뮤지컬과 금전 계약은 없다고 말했습니다.", tag: "fact" },
  { year: "이후", text: "자서전 『Boss in Boots – From Barton to Broadway』를 내고 강연 활동을 한다고 지역 경제지가 전합니다.", tag: "fact" },
];

export const COMPARE: { topic: string; show: string; real: string; verdict: Verdict }[] = [
  { topic: "주인공", show: "찰리 프라이스, 아버지의 공장을 물려받은 아들.", real: "스티브 패이트먼이 아버지에게서 4대째 가업을 이어받았습니다. 찰리는 그를 바탕으로 한 인물입니다.", verdict: "changed" },
  { topic: "공장 이름·장소", show: "‘프라이스 앤 선’, 노샘프턴.", real: "W.J. 브룩스(브룩스), 노샘프턴 근처 얼스 바턴 마을. 영화는 노샘프턴 트리커스 공장에서 주로 촬영했습니다.", verdict: "changed" },
  { topic: "위기의 원인", show: "값싼 수입 구두와 줄어드는 주문.", real: "맞습니다. 여기에 강한 파운드화로 독일 수출이 무너진 것이 컸습니다.", verdict: "fact" },
  { topic: "아이디어의 출처", show: "런던에서 우연히 만난 드래그 퀸 롤라의 부러진 굽.", real: "포크스턴 의류점 주인 수 셰퍼드의 전화. 남자 몸에 맞는 튼튼한 여성 구두가 필요하다는 실제 고객 수요였습니다.", verdict: "changed" },
  { topic: "롤라", show: "공장에 들어와 디자인을 이끄는 드래그 퀸.", real: "한 사람으로서는 창작. 패이트먼은 ‘만난 8~10명을 합친 인물’이라고 했습니다. 아래 롤라 설명을 보세요.", verdict: "invented" },
  { topic: "부츠", show: "높고 반짝이는 빨간 허벅지 부츠.", real: "남자 체중을 견디게 금속 심을 넣은 부츠. 수 셰퍼드는 고객이 원한 건 화려한 표범 무늬보다 ‘클래식한 검은 에나멜’이었다고 회고합니다.", verdict: "changed" },
  { topic: "패션쇼", show: "밀라노 패션쇼에 모든 것을 겁니다.", real: "실제로 관심을 끈 무대는 독일 뒤셀도르프 신발 박람회와 BBC 다큐였습니다.", verdict: "changed" },
  { topic: "주인공이 직접 부츠를 신다", show: "모델이 없어 찰리가 무대에 섰다가 넘어집니다.", real: "패이트먼은 디바인 카탈로그에서 직접 모델을 섰습니다(노샘프턴 박물관). 런웨이에서 넘어진 장면은 극입니다.", verdict: "changed" },
  { topic: "돈과의 팔씨름", show: "롤라가 일부러 져 주며 마음을 엽니다.", real: "자료에서 대응되는 실제 사건을 찾지 못했습니다. 극적 장치로 봅니다.", verdict: "invented" },
  { topic: "약혼녀 니콜라·로렌과의 사랑", show: "약혼녀와 헤어지고 직원 로렌과 이어집니다.", real: "패이트먼은 당시 아내 사라와 갓 태어난 아들이 있었다고 텔레그래프는 적습니다. 니콜라·로렌 줄거리의 실제 대응은 확인되지 않습니다.", verdict: "invented" },
  { topic: "결말", show: "쇼가 성공하고 공장이 살아납니다.", real: "디바인 라인은 1년 반~2년쯤 공장을 버티게 했지만 2000년 폐업했습니다.", verdict: "changed" },
  { topic: "BBC 다큐", show: "영화·뮤지컬에는 나오지 않습니다.", real: "1999년 2월 BBC2 다큐가 이 이야기를 세상에 알렸고, 영화의 직접 계기가 됐습니다.", verdict: "fact" },
  { topic: "공장 사람들의 가족 같은 분위기", show: "공장 직원들이 마지막에 하나로 뭉칩니다.", real: "패이트먼은 사람들이 사랑한 건 ‘늘 가족 같던 공장 사람들의 따뜻함’이라고 BBC에 말했습니다. 구체적 사건은 극입니다.", verdict: "legend" },
];

export const PEOPLE_INVOLVED: { name: string; en: string; role: string; real: string; show: string; verdict: Verdict }[] = [
  { name: "스티브 패이트먼", en: "Steve Pateman", role: "W.J. 브룩스 4대째 사장", real: "30대에 아버지에게서 회사를 이어받아 디바인 라인으로 활로를 찾았습니다. 공장 폐업 뒤 전업 소방관이 됐고, 자서전을 냈습니다.", show: "찰리 프라이스 (영화: 조엘 에저턴 / 브로드웨이: 스타크 샌즈)", verdict: "changed" },
  { name: "리처드 패이트먼", en: "Richard Pateman", role: "스티브의 아버지, 전임 사장", real: "텔레그래프는 스티브가 아버지 리처드의 뒤를 이었다고 적습니다.", show: "해럴드 프라이스 (찰리의 아버지, 극 초반에 세상을 떠남). 실제 아버지의 사망 시점은 자료에서 확인하지 못했습니다.", verdict: "changed" },
  { name: "수 셰퍼드", en: "Sue Sheppard", role: "포크스턴 ‘레이시스(Lacies)’ 주인", real: "트랜스젠더 전문 의류점을 운영하며 남자 사이즈 여성 구두를 주문한 사람. 사업 전환의 진짜 계기입니다.", show: "직접 대응하는 인물은 없습니다. 그 역할은 롤라에게 녹아 있습니다.", verdict: "changed" },
  { name: "롤라 / 사이먼", en: "Lola / Simon", role: "드래그 퀸 (극 중 인물)", real: "실존하지 않는 인물. 패이트먼이 만난 8~10명을 합친 창작입니다.", show: "영화: 치웨텔 에지오포 (골든글로브 후보) / 브로드웨이: 빌리 포터 (토니상 남우주연상)", verdict: "invented" },
  { name: "BBC 『Trouble at the Top』 제작진", en: "BBC Two", role: "다큐멘터리", real: "1999년 2월 방영, ‘킹키 부츠 공장’이라는 이름을 붙였고, 약 18개월 뒤 후속편에서 폐업을 기록했습니다.", show: "극에는 나오지 않습니다.", verdict: "fact" },
  { name: "영화·뮤지컬 창작진", en: "Creators", role: "각색", real: "영화: 줄리언 재럴드 감독, 제프 딘·팀 퍼스 각본(2005). 뮤지컬: 신디 로퍼 음악·가사, 하비 피어스타인 대본, 제리 미첼 연출·안무.", show: "—", verdict: "fact" },
];

export const QUIZ_P = [
  { q: "킹키 부츠의 실제 공장이 있던 마을은?", options: ["얼스 바턴", "노리치", "리버풀"], answer: 0, why: "노샘프턴셔 얼스 바턴의 W.J. 브룩스입니다." },
  { q: "실제 공장 사장의 이름은?", options: ["찰리 프라이스", "스티브 패이트먼", "돈 버턴"], answer: 1, why: "찰리 프라이스는 그를 바탕으로 만든 극 중 인물입니다." },
  { q: "사업을 바꾼 진짜 계기는?", options: ["드래그 퀸과의 우연한 만남", "포크스턴 의류점 주인의 전화", "밀라노 패션쇼 초대"], answer: 1, why: "레이시스의 수 셰퍼드가 남자 사이즈 여성 구두를 문의했습니다." },
  { q: "실제 페티시·크로스드레싱 부츠 라인의 이름은?", options: ["디바인 (Divine)", "롤라 (Lola)", "밀라노 (Milano)"], answer: 0, why: "Divine Footwear였습니다." },
  { q: "롤라에 대해 가장 정확한 설명은?", options: ["실존한 드래그 퀸 한 명", "완전한 상상", "실제 만난 8~10명을 합친 창작 인물"], answer: 2, why: "패이트먼이 BBC 인터뷰에서 그렇게 설명했습니다." },
  { q: "BBC 다큐 『Trouble at the Top』이 방영된 해는?", options: ["1995", "1999", "2005"], answer: 1, why: "1999년 2월 BBC2." },
  { q: "실제 공장은 어떻게 됐나요?", options: ["지금도 영업 중", "2000년 폐업", "뮤지컬 덕에 재개업"], answer: 1, why: "2000년 폐업, 공장 터는 주택 부지로 팔렸습니다." },
  { q: "공장이 수출하던 주요 나라는?", options: ["미국", "독일", "일본"], answer: 1, why: "매출의 약 90%가 독일 수출이었다고 합니다." },
  { q: "실제로 관심을 끈 신발 박람회가 열린 도시는?", options: ["밀라노", "뒤셀도르프", "파리"], answer: 1, why: "영화는 밀라노로 바꿨습니다." },
  { q: "패이트먼이 굽 다는 기계에 투자한 금액은?", options: ["1,200파운드", "1만 2천 파운드", "12만 파운드"], answer: 1, why: "텔레그래프 인터뷰 기준." },
  { q: "영화 『킹키 부츠』는 주로 어디서 촬영했나요?", options: ["W.J. 브룩스 공장", "노샘프턴 트리커스 공장", "런던 스튜디오만"], answer: 1, why: "실제 공장은 이미 문을 닫은 뒤였습니다." },
  { q: "2013년 BBC 인터뷰 당시 패이트먼의 직업은?", options: ["뮤지컬 프로듀서", "전업 소방관", "구두 디자이너"], answer: 1, why: "BBC 2013 기사." },
];

export const SOURCES_P: [string, string][] = [
  ["BBC News, Vincent Dowd, “Kinky Boots inspiration comes out of the shadows” (2013-06-18) — 롤라 관련 본인 발언 출처", "https://www.bbc.co.uk/news/entertainment-arts-22940451"],
  ["BBC Northamptonshire, “Factory fact or film fiction?” (2005)", "https://www.bbc.co.uk/northamptonshire/content/articles/2005/10/04/kb_fact_fiction_feature.shtml"],
  ["The Telegraph, David Gritten, “I've always liked to shock people” (2005-10-06)", "https://www.telegraph.co.uk/culture/film/3646991/Ive-always-liked-to-shock-people.html"],
  ["Northampton Museums & Art Gallery timeline, “Kinky Boots”", "https://timeline.northamptonmuseums.com/timeline/kinky-boots"],
  ["Business Times Northamptonshire, “The story behind the story”", "https://business-times.co.uk/articles/news/the-story-behind-the-story/"],
  ["Wikipedia: Kinky Boots (film)", "https://en.wikipedia.org/wiki/Kinky_Boots_(film)"],
  ["사진: Earls Barton village, Northamptonshire — Kev747, 퍼블릭 도메인 (위키미디어 공용)", "https://commons.wikimedia.org/wiki/File:Earls_Barton_village,_Northamptonshire,_UK.jpg"],
];
