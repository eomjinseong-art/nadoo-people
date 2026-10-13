/**
 * Howard Hughes × The Aviator (2004).
 * Film plot checked against: en.wikipedia "The Aviator (2004 film)" plot, AFI Catalog synopsis & history notes.
 * Life facts: en.wikipedia "Howard Hughes", AFI Catalog notes. Unverified items carry tag "legend" (전해지는 이야기).
 */

export type Verdict = "fact" | "changed" | "invented" | "legend";
export const VERDICT_LABEL: Record<Verdict, string> = {
  fact: "사실",
  changed: "각색",
  invented: "창작",
  legend: "전해지는 이야기",
};

export type Chapter = {
  n: number;
  slug: string;
  title: string;
  en: string;
  span: string;
  plot: string[];
  scenes: string[];
  compare: { film: string; real: string; verdict: Verdict }[];
  cast: CastKey[];
};

export type CastCard = {
  real: string;
  realEn: string;
  actor: string;
  role: string;
  life: string;
  inFilm: string;
  gap: string;
  verdict: Verdict;
};

export const CAST = {
  hughes: { real: "하워드 휴즈", realEn: "Howard Hughes (1905–1976)", actor: "레오나르도 디캐프리오", role: "주인공", life: "텍사스 휴스턴 출신. 아버지의 석유 드릴 회사(휴즈 툴)를 물려받아 영화 제작자, 비행사, 항공 사업가가 됩니다.", inFilm: "1927년부터 1947년까지, 영광과 마음의 병을 함께 보여 줍니다.", gap: "영화는 큰 무너짐을 1947년 청문회 직전으로 모읍니다. 실제 긴 은둔은 1944년과 1958년 무렵에 있었습니다.", verdict: "changed" },
  hepburn: { real: "캐서린 헵번", realEn: "Katharine Hepburn (1907–2003)", actor: "케이트 블란쳇", role: "연인", life: "할리우드 스타. 1930년대 후반 휴즈와 사귀었고, 헤어진 뒤에도 사이가 나쁘지 않았습니다.", inFilm: "골프와 비행을 함께하고, 그의 결벽을 처음 알아챕니다. 스펜서 트레이시를 만나 떠납니다.", gap: "연애는 사실이지만 순서와 세부는 바뀌었습니다. 휴즈가 『필라델피아 스토리』 판권을 사 준 일은 영화에 없습니다.", verdict: "changed" },
  gardner: { real: "에바 가드너", realEn: "Ava Gardner (1922–1990)", actor: "케이트 베킨세일", role: "연인·친구", life: "1940년대 스타. 휴즈와 오래 만났다 헤어지기를 반복했습니다.", inFilm: "보석 선물을 거절하고, 도청을 알고 화를 냅니다. 청문회 전 그를 씻기고 옷을 입혀 줍니다.", gap: "보석을 거절한 것은 그녀의 자서전과 맞습니다. 하지만 그의 무너짐을 도왔다는 이야기는 자서전에 없습니다.", verdict: "changed" },
  dietrich: { real: "노아 디트리히", realEn: "Noah Dietrich", actor: "존 C. 라일리", role: "재무 관리자", life: "회계사 출신. 30년 넘게 휴즈의 돈을 관리하다 1957년 무렵 갈라섭니다.", inFilm: "1927년 촬영장에서 고용되어, 늘 ‘돈이 없다’고 말리는 사람입니다.", gap: "실제로는 2년쯤 앞서 영화사 일을 맡기려고 고용되었습니다(AFI).", verdict: "changed" },
  trippe: { real: "후안 트립", realEn: "Juan Trippe", actor: "알렉 볼드윈", role: "라이벌", life: "팬암(Pan Am) 창업자. 국제선을 거의 독점했습니다.", inFilm: "브루스터 의원을 움직여 TWA를 빼앗으려 합니다.", gap: "트립과 브루스터의 법안 추진은 기록과 맞습니다. 대화 장면은 극입니다.", verdict: "fact" },
  brewster: { real: "오언 브루스터 상원의원", realEn: "Sen. Owen Brewster", actor: "앨런 알다", role: "적수", life: "메인주 공화당 상원의원. 1947년 국방조사위원회 청문회를 이끌었습니다.", inFilm: "뒷거래를 제안했다가 청문회에서 휴즈에게 역공을 당합니다.", gap: "청문회는 실제 기록을 바탕으로 했습니다. 뒷거래 제안은 휴즈 쪽 주장이었습니다.", verdict: "changed" },
  odekirk: { real: "글렌 오데커크", realEn: "Glenn Odekirk", actor: "맷 로스", role: "엔지니어", life: "H-1을 만든 엔지니어·조종사.", inFilm: "늘 곁에서 비행기를 만들고, 마지막에 그를 화장실로 숨깁니다.", gap: "H-1 제작에 참여한 것은 사실입니다.", verdict: "fact" },
  frye: { real: "잭 프라이", realEn: "Jack Frye", actor: "대니 휴스턴", role: "TWA 사장", life: "TWA 사장. 휴즈에게 회사 인수를 권했습니다.", inFilm: "높이 나는 여객기 이야기를 하다가, 휴즈가 아예 TWA를 사 버립니다.", gap: "이사회가 새 비행기 구입을 꺼려 프라이가 인수를 권한 것은 AFI 기록과 맞습니다.", verdict: "fact" },
  harlow: { real: "진 할로", realEn: "Jean Harlow", actor: "그웬 스테파니", role: "배우", life: "『지옥의 천사들』로 스타가 된 배우.", inFilm: "1930년 시사회에 휴즈와 함께 섭니다.", gap: "이 영화로 이름을 알린 것은 사실입니다.", verdict: "fact" },
  domergue: { real: "페이스 도머그", realEn: "Faith Domergue", actor: "켈리 가너", role: "어린 배우", life: "휴즈가 1940년 계약을 사들인 배우. 당시 10대였습니다.", inFilm: "질투로 차를 들이받는 장면이 나옵니다.", gap: "비슷한 일이 전기에 나옵니다(AFI). 세부는 전해지는 이야기입니다.", verdict: "legend" },
  breen: { real: "조지프 브린", realEn: "Joseph Breen", actor: "에드워드 허먼", role: "검열 책임자", life: "할리우드 검열(제작 규약)을 맡았던 사람.", inFilm: "『무법자』의 노출을 두고 휴즈와 다툽니다.", gap: "『무법자』가 검열과 오래 싸운 것은 사실입니다.", verdict: "fact" },
  fitz: { real: "피츠 교수", realEn: "Professor Fitz", actor: "이언 홈", role: "기상학자", life: "실존 인물이 아닙니다.", inFilm: "구름을 예보하고, 검열 회의에서 ‘계산’을 맡습니다.", gap: "AFI는 이 인물이 완전히 창작이라고 적습니다.", verdict: "invented" },
} satisfies Record<string, CastCard>;

export type CastKey = keyof typeof CAST;

export const CHAPTERS: Chapter[] = [
  {
    n: 1, slug: "1", title: "목욕과 ‘격리’", en: "Quarantine", span: "1913–1914 · 휴스턴",
    plot: [
      "영화는 어린 휴즈가 어머니에게 목욕을 받는 장면으로 시작합니다. 어머니는 마을에 도는 전염병 이야기를 하며, 아이에게 ‘quarantine(격리)’의 철자를 하나씩 말하게 합니다.",
      "어머니는 아이에게 ‘너는 안전하지 않다’고 말합니다. 이 짧은 장면이 영화 전체의 열쇠가 됩니다. 균에 대한 두려움, 깨끗해야 한다는 강박이 여기서 시작된 것처럼 보여 줍니다.",
    ],
    scenes: ["물에 비누를 묻혀 아이를 씻기며 단어 철자를 묻는 어머니. 영화는 마지막 장면에서 이 아이를 다시 불러냅니다."],
    compare: [
      { film: "어머니가 병에 대한 두려움을 심어 줍니다.", real: "어머니가 병을 지나치게 걱정했다는 것은 전기들이 공통으로 적습니다. 그것이 그의 강박을 ‘만들었다’고 단정할 수는 없습니다.", verdict: "legend" },
      { film: "자막의 해는 1913년(위키백과) 또는 1914년(AFI)으로 적힙니다.", real: "자료마다 해가 다르게 정리되어 있습니다. 이 사이트는 둘 다 적습니다.", verdict: "legend" },
    ],
    cast: ["hughes"],
  },
  {
    n: 2, slug: "2", title: "『지옥의 천사들』", en: "Hell's Angels", span: "1927–1930 · 할리우드",
    plot: [
      "1927년, 부모를 잃고 아버지 회사를 물려받은 스물두 살 휴즈가 1차 대전 공중전 영화 『지옥의 천사들』을 직접 감독합니다. 비행기 수십 대와 카메라 수십 대를 모읍니다.",
      "촬영장에서 그는 회계사 노아 디트리히를 고용해 회사 돈을 맡깁니다. 하늘에 구름이 없으면 비행기의 속도가 느껴지지 않는다며, 구름이 올 때까지 몇 달을 기다립니다. 카메라가 모자라 MGM의 루이스 B. 메이어에게 빌리려다 거절당하기도 합니다.",
      "촬영이 끝날 무렵 첫 유성영화 『재즈 싱어』가 나옵니다. 휴즈는 무성영화는 이미 낡았다며 영화 전체를 소리 있는 영화로 다시 찍겠다고 합니다. 디트리히는 회사가 망한다고 말리지만, 휴즈는 회사를 담보로 돈을 빌리라고 합니다.",
    ],
    scenes: ["구름을 기다리며 하늘만 보는 촬영장.", "『재즈 싱어』를 보고 ‘다시 찍자’고 결정하는 휴즈와 얼굴이 굳는 디트리히."],
    compare: [
      { film: "휴즈가 직접 감독하고 엄청난 돈을 씁니다.", real: "사실입니다. 비행기 수십 대를 모은 당시 가장 비싼 영화였습니다(AFI는 약 400만 달러라 적습니다).", verdict: "fact" },
      { film: "무성으로 찍다가 유성으로 다시 찍습니다.", real: "사실입니다.", verdict: "fact" },
      { film: "디트리히를 촬영장에서 고용합니다.", real: "실제로는 그보다 2년쯤 앞서 고용했습니다(AFI).", verdict: "changed" },
    ],
    cast: ["hughes", "dietrich", "odekirk", "fitz"],
  },
  {
    n: 3, slug: "3", title: "시사회와 헵번", en: "Premiere & Kate", span: "1930–1935",
    plot: [
      "1930년 그로먼스 차이니즈 극장에서 『지옥의 천사들』이 화려하게 개봉합니다. 휴즈는 주연 진 할로와 함께 서지만, 플래시와 군중 속에서 불안해합니다. 개봉 뒤에도 만족하지 못해 다시 편집하라고 합니다.",
      "몇 년 뒤, 휴즈는 캐서린 헵번의 촬영장 해변에 비행기를 몰고 내려 골프를 치자고 합니다. 두 사람은 성공과 명성에 대한 집착이 닮아 빠르게 가까워지고, 헵번은 그의 집으로 들어옵니다.",
      "헵번은 그가 손을 지나치게 씻고, 남이 만진 것을 꺼리는 모습을 처음 알아봅니다. 영화는 그녀가 그 불안을 조금 덜어 주는 사람으로 그립니다.",
    ],
    scenes: ["비행기를 직접 몰고 헵번을 태워 하늘을 나는 장면. 헵번이 조종간을 잡아 봅니다."],
    compare: [
      { film: "헵번과 사귀고 함께 삽니다.", real: "사실입니다. 헵번은 그의 로스앤젤레스 집에 살았습니다. 다만 순서와 세부는 극화되었습니다(AFI).", verdict: "changed" },
      { film: "개봉 뒤에도 다시 편집을 지시합니다.", real: "완벽주의는 여러 전기가 적지만, 이 장면 자체는 극의 장치입니다.", verdict: "legend" },
    ],
    cast: ["hughes", "harlow", "hepburn", "dietrich"],
  },
  {
    n: 4, slug: "4", title: "H-1과 사탕무밭", en: "The H-1 Racer", span: "1935",
    plot: [
      "휴즈와 오데커크는 매끈한 은빛 경주기 H-1을 만듭니다. TWA 사장 잭 프라이가 새 여객기 이야기를 꺼내자, 휴즈는 날씨 위로 높이 나는 비행기를 말하고, 이사회가 망설이자 아예 TWA를 사겠다고 합니다.",
      "산타아나 근처 비행장에서 휴즈는 직접 H-1을 몰아 시속 352마일(약 567km)로 세계 속도 기록을 깹니다. 하지만 연료가 떨어져 사탕무밭에 불시착합니다. 그는 흙투성이로 웃습니다.",
      "집에 돌아와 헵번에게 기쁨을 나누며, 가끔 자기가 미쳐 버릴까 두렵다고 털어놓습니다.",
    ],
    scenes: ["기록을 깬 뒤 사탕무밭에 처박힌 은빛 비행기와, 기어 나와 웃는 휴즈."],
    compare: [
      { film: "1935년 시속 352마일 기록, 사탕무밭 불시착.", real: "사실입니다. 1935년 9월 13일 기록이고, 연료가 떨어져 사탕무밭에 내렸습니다.", verdict: "fact" },
      { film: "TWA 인수 이야기가 H-1 무렵에 나옵니다.", real: "실제로 TWA 지배권을 산 것은 1939년 무렵입니다. 영화는 시간을 당겼습니다.", verdict: "changed" },
    ],
    cast: ["hughes", "odekirk", "frye", "hepburn"],
  },
  {
    n: 5, slug: "5", title: "세계 일주와 헵번가", en: "Around the World", span: "1938–1940년대 초",
    plot: [
      "휴즈는 세계를 가장 빨리 도는 비행에 성공하고, 뉴욕에서 색종이 퍼레이드를 받습니다. 영화는 실제 뉴스 화면을 섞어 씁니다.",
      "헵번은 그를 코네티컷의 가족 집에 데려갑니다. 말 많고 자유로운 헵번가 사람들 사이에서 휴즈는 어색해하고, 돈을 가볍게 말하는 그들에게 불편함을 드러냅니다.",
      "휴즈는 『무법자』를 찍기 시작하고, 손을 씻는 의식과 균에 대한 두려움을 남몰래 숨기며 지냅니다.",
    ],
    scenes: ["헵번가 저녁 식탁. 모두 한꺼번에 말하는 가족과, 말이 줄어드는 휴즈."],
    compare: [
      { film: "세계 일주 기록.", real: "사실입니다. 1938년 7월, 91시간(3일 19시간 17분)으로 세계를 돌았습니다.", verdict: "fact" },
      { film: "퍼레이드 화면.", real: "뉴욕 퍼레이드 장면에는 실제 휴즈의 기록 화면이 쓰였다고 AFI는 적습니다.", verdict: "fact" },
      { film: "헵번가를 부유한 귀족 집안처럼 그립니다.", real: "헵번의 아버지는 의사, 어머니는 여성 참정권 운동가였습니다. 이 저녁 장면의 대화는 극으로 만든 것입니다.", verdict: "legend" },
    ],
    cast: ["hughes", "hepburn"],
  },
  {
    n: 6, slug: "6", title: "검열, 콘스텔레이션, 이별", en: "Censors & Constellation", span: "1940년대 초",
    plot: [
      "『무법자』의 노출을 두고 검열 책임자 브린과 회의가 열립니다. 휴즈는 피츠 교수에게 자로 재듯 ‘계산’을 시켜, 다른 배우들의 사진과 비교하며 맞섭니다.",
      "휴즈는 록히드의 새 여객기 콘스텔레이션을 보고, 팬암과 국제선에서 겨룰 수 있다며 대량 주문을 합니다.",
      "헵번은 다른 사람(스펜서 트레이시)을 만났다며 떠납니다. 휴즈는 옷을 모두 태우고 새 옷을 사 오라고 합니다. 그 뒤 10대 배우 페이스 도머그와 만나고, 에바 가드너에게 보석을 내밀지만 거절당합니다. 휴즈는 헵번과 트레이시의 사진이 기사로 나가지 않도록 기자에게 돈을 주고 사진을 삽니다.",
    ],
    scenes: ["검열 회의실에서 자와 사진으로 ‘노출 계산’을 하는 장면. 영화에서 가장 웃긴 장면으로 자주 꼽힙니다.", "에바 가드너가 보석 상자를 밀어내며 자기는 팔리는 사람이 아니라고 말하는 장면."],
    compare: [
      { film: "『무법자』의 검열 싸움.", real: "사실입니다. 1943년 잠깐 개봉했다가 1946년에야 전국 개봉했습니다.", verdict: "fact" },
      { film: "피츠 교수가 계산을 합니다.", real: "피츠 교수는 창작 인물입니다.", verdict: "invented" },
      { film: "콘스텔레이션 발주.", real: "휴즈가 콘스텔레이션 설계를 실제로 이끌었다는 것이 AFI의 정리입니다.", verdict: "fact" },
      { film: "헵번과 트레이시의 사진을 사들입니다.", real: "확인되지 않은 일입니다.", verdict: "legend" },
    ],
    cast: ["hughes", "breen", "fitz", "hepburn", "gardner", "domergue", "frye"],
  },
  {
    n: 7, slug: "7", title: "XF-11 추락", en: "The XF-11 Crash", span: "1940년대 중반–1946",
    plot: [
      "전쟁이 한창일 때 휴즈는 군과 두 가지 계약을 맺습니다. 정찰기 XF-11과, 나무로 만드는 거대한 수송 비행정 ‘허큘리스’입니다.",
      "트립은 브루스터 상원의원에게 국제선을 팬암에 몰아주는 법안을 내게 합니다. 격납고에서 결정해야 할 일이 쏟아지자, 휴즈는 같은 말을 멈추지 못하고 반복하다 도망치듯 자리를 뜹니다.",
      "1946년 휴즈는 XF-11을 직접 시험 비행합니다. 한 시간 넘게 잘 날던 비행기가 갑자기 오른쪽으로 기울며 떨어지고, 베벌리힐스 주택가 지붕을 날개로 가르며 추락합니다. 불타는 비행기에서 기어 나온 그를 근처의 한 사람이 끌어냅니다.",
      "병원에서 그는 전쟁이 끝나 허큘리스 계약이 취소되었다는 소식을 듣습니다. 그래도 자기 돈으로 끝까지 만들겠다고 합니다.",
    ],
    scenes: ["XF-11이 집들 사이를 스치며 떨어지는 장면. 집 안에서 보면 날개가 벽을 뚫고 지나갑니다."],
    compare: [
      { film: "1946년 베벌리힐스 추락, 이웃이 구조.", real: "사실입니다. 1946년 7월 7일. 프로펠러 하나가 거꾸로 돌기 시작했고(기름 누출), 그는 크게 다쳤습니다. 해병대원이 그를 끌어냈다고 AFI는 적습니다.", verdict: "fact" },
      { film: "허큘리스 계약 취소.", real: "군의 계약 취소와 재협상 과정은 영화보다 복잡했습니다(AFI).", verdict: "changed" },
      { film: "같은 말을 반복하는 증상.", real: "1944년 무렵 같은 말을 되풀이한 뒤 몇 달 사라진 일이 전기에 나옵니다(AFI).", verdict: "changed" },
    ],
    cast: ["hughes", "odekirk", "trippe", "brewster", "frye"],
  },
  {
    n: 8, slug: "8", title: "상영실에 갇히다", en: "The Screening Room", span: "1946–1947",
    plot: [
      "몸이 덜 나은 휴즈는 에바의 집에 도청 장치를 단 것이 들통나 크게 싸웁니다. 같은 날 FBI와 상원 조사관들이 그의 집에서 서류 상자를 들고 나갑니다.",
      "브루스터는 법안을 지지하면 청문회를 멈추겠다고 제안합니다. 휴즈는 거절합니다. 그 뒤 그는 자기 상영실에 틀어박혀, 씻지 않고 옷도 입지 않은 채 영화만 봅니다.",
      "헵번이 찾아와 문밖에서 도와주겠다고 하지만 그는 문을 열지 못합니다. 트립도 문밖 의자에 앉아 TWA를 넘기라고 압박합니다. 마침내 에바가 집으로 찾아와 아무렇지 않은 듯 그를 씻기고 면도시키고 옷을 입힙니다.",
    ],
    scenes: ["어두운 상영실, 영사기 빛만 있는 방에 혼자 앉은 휴즈.", "에바가 그의 머리를 감기고 면도해 주는 조용한 장면."],
    compare: [
      { film: "1947년 청문회 직전 몇 달간 상영실에 갇힙니다.", real: "상영실 은둔은 실제로 있었지만, 1958년 무렵의 일입니다(AFI). 영화는 이것을 1947년으로 옮겼습니다.", verdict: "changed" },
      { film: "에바가 그를 씻기고 청문회를 준비시킵니다.", real: "에바의 자서전에는 이런 일이 없습니다(AFI).", verdict: "invented" },
      { film: "FBI 수색.", real: "전쟁 계약 조사가 있었던 것은 사실입니다. 장면의 세부는 극입니다.", verdict: "changed" },
    ],
    cast: ["hughes", "gardner", "hepburn", "trippe", "brewster", "dietrich"],
  },
  {
    n: 9, slug: "9", title: "청문회와 ‘나무 거위’", en: "Hearing & Hercules", span: "1947년 8월–11월",
    plot: [
      "기자로 가득한 상원 청문회. 브루스터는 휴즈가 나랏돈을 받고 비행기를 내놓지 못했다고 몰아붙입니다. 휴즈는 다른 회사들도 납품하지 못했는데 왜 자기만 조사하느냐고 되묻고, 법안이 팬암 쪽에서 쓰였다고 맞섭니다.",
      "그는 브루스터가 뒷거래를 제안했다고 폭로하고, 허큘리스가 날지 못하면 이 나라를 떠나겠다고 말합니다. 청문회는 흐지부지되고, 법안은 무너집니다.",
      "몇 달 뒤 롱비치 항구. 휴즈가 거대한 허큘리스를 몰고 물 위를 달리다 잠깐 떠오릅니다. 약 1마일을 날고 내려앉습니다.",
      "축하 자리에서 그는 제트 여객기 이야기를 하다가, 장갑 낀 남자들의 환영을 보고 다시 같은 말을 반복합니다. 오데커크가 그를 화장실로 데려가고, 디트리히가 의사를 부르러 갑니다. 거울 앞에서 휴즈는 어린 시절을 떠올리며 ‘the way of the future(미래의 길)’을 계속 되뇝니다. 영화는 거기서 끝납니다.",
    ],
    scenes: ["청문회장에서 마이크를 당겨 브루스터를 몰아붙이는 휴즈.", "물보라를 일으키며 떠오르는 허큘리스.", "거울 앞에서 같은 말을 되풀이하는 마지막 장면."],
    compare: [
      { film: "청문회에서 휴즈가 이깁니다.", real: "청문회는 1947년 실제로 열렸고 흐지부지 끝났습니다. 대체로 휴즈가 여론에서 이겼다고 봅니다.", verdict: "fact" },
      { film: "허큘리스가 1마일을 납니다.", real: "사실입니다. 1947년 11월 2일, 수면 위 약 70피트(약 21m)로 약 1마일. 그것이 유일한 비행이었습니다.", verdict: "fact" },
      { film: "비행 직후 크게 무너집니다.", real: "이 순간의 무너짐은 극적 마무리입니다. 그의 긴 은둔은 1950년대 후반부터 깊어졌습니다.", verdict: "changed" },
    ],
    cast: ["hughes", "brewster", "trippe", "odekirk", "dietrich", "gardner"],
  },
];

export const TIMELINE: { year: string; text: string; tag?: Verdict; after1947?: boolean }[] = [
  { year: "1905", text: "텍사스 휴스턴에서 태어남. 출생일은 12월 24일로 알려졌지만, 세례 기록에는 9월 24일로 적혀 있어 확실하지 않습니다.", tag: "legend" },
  { year: "1909", text: "아버지가 단단한 바위를 뚫는 석유 드릴 날을 개발해 큰돈을 법니다." },
  { year: "1922", text: "어머니가 수술 뒤 갑자기 세상을 떠남." },
  { year: "1924", text: "아버지 사망. 휴즈 툴 회사를 물려받고 친척들 지분을 사들임." },
  { year: "1925", text: "엘라 라이스와 결혼(1929년 이혼). 할리우드로 감." },
  { year: "1927–1930", text: "『지옥의 천사들』 제작·감독. 1930년 개봉." },
  { year: "1932", text: "『스카페이스』 제작. 휴즈 항공기 회사 설립." },
  { year: "1935", text: "H-1으로 시속 352마일 세계 속도 기록(9월 13일)." },
  { year: "1937", text: "H-1으로 미국 대륙 횡단 기록(약 7시간 28분)." },
  { year: "1938", text: "세계 일주 비행 91시간(7월 14일 도착). 뉴욕 퍼레이드." },
  { year: "1939 무렵", text: "TWA 지배 지분을 사들임." },
  { year: "1943", text: "『무법자』 잠깐 개봉. 검열 때문에 1946년 전국 개봉." },
  { year: "1944", text: "같은 말을 되풀이한 뒤 몇 달 동안 사라짐(전기에 따름).", tag: "legend" },
  { year: "1946", text: "XF-11 시험 비행 중 베벌리힐스 추락(7월 7일). 중상." },
  { year: "1947", text: "상원 청문회(8월, 11월). H-4 허큘리스 단 한 번 비행(11월 2일)." },
  { year: "1948", text: "RKO 영화사 인수.", after1947: true },
  { year: "1953", text: "하워드 휴즈 의학연구소 설립. 지금도 큰 의학 연구 재단입니다.", after1947: true },
  { year: "1955–1957", text: "RKO를 팔고, RKO는 1957년 제작을 멈춤. 디트리히와 갈라섬.", after1947: true },
  { year: "1957", text: "배우 진 피터스와 결혼(1971년 이혼).", after1947: true },
  { year: "1958", text: "빌린 상영실에 몇 달 동안 틀어박힘. 영화 8장의 장면은 이때를 바탕으로 합니다(AFI).", after1947: true },
  { year: "1960–1966", text: "TWA 경영에서 밀려나고 소송. 1966년 TWA 주식을 약 5억 4600만 달러에 팔아야 했습니다.", after1947: true },
  { year: "1966–1970", text: "라스베이거스 데저트 인 호텔 꼭대기 층에 머물다 호텔을 통째로 삼. 여러 호텔·카지노를 사들임.", after1947: true },
  { year: "1970년대", text: "바하마, 니카라과, 캐나다, 런던, 멕시코 등으로 옮겨 다니며 거의 아무도 만나지 않음.", after1947: true },
  { year: "1972", text: "작가 클리퍼드 어빙의 ‘휴즈 자서전’이 가짜로 드러남. 휴즈가 전화 기자회견으로 부인했습니다.", after1947: true },
  { year: "1974", text: "CIA가 소련 잠수함을 몰래 건지려고 휴즈의 해저 채굴선(글로마 익스플로러)을 위장으로 씀.", after1947: true },
  { year: "1976", text: "4월 5일, 멕시코 아카풀코에서 휴스턴으로 가는 비행기 안에서 사망. 부검은 신부전을 사인으로 적었습니다.", after1947: true },
  { year: "1976 이후", text: "‘모르몬 유언장’ 소동. 1978년 네바다 법원이 위조로 판정하고, 유언 없이 죽은 것으로 정리했습니다. 재산은 친척들에게 나뉘었습니다.", after1947: true },
];

export type Aircraft = { slug: string; name: string; en: string; year: string; img?: { src: string; alt: string; credit: string; page: string; license?: { name: string; url: string } }; facts: string[]; inFilm: string };

export const AIRCRAFT: Aircraft[] = [
  {
    slug: "h-1", name: "H-1 레이서", en: "Hughes H-1 Racer", year: "1935",
    img: { src: "/img/h1-model.jpg", alt: "휴즈 H-1 레이서의 1/4 축소 모형", credit: "샌디에이고 항공우주박물관 소장 모형, 퍼블릭 도메인 (실물이 아니라 축소 모형 사진)", page: "https://commons.wikimedia.org/wiki/File:123008rob003-2_Curatorial_Collection_Image_-_Model,_Hughes_H-1_Racer;_Scale-_1-4;_Markings-_NX_258Y;_Original_built_by_Hughes_Aircraft_in_1935,_the_last_aircraft_built_by_a_private_individual_to_set_the_world_speed_recor_(53896709237).jpg" },
    facts: ["1935년 9월 13일 시속 352마일(약 567km) 육상기 속도 기록.", "1937년 미국 대륙 횡단 약 7시간 28분.", "개인이 만든 비행기가 세계 속도 기록을 세운 마지막 사례로 꼽힙니다.", "실물은 스미스소니언 국립항공우주박물관에 있습니다."],
    inFilm: "4장. 영화를 위해 만든 복제기는 추락해, 촬영에는 모형이 쓰였다고 합니다.",
  },
  {
    slug: "round-the-world", name: "1938 세계 일주기", en: "Lockheed 14 Super Electra (1938)", year: "1938",
    img: { src: "/img/hughes-hull.jpg", alt: "1938년 하워드 휴즈와 코델 헐 국무장관", credit: "미국 의회도서관, 퍼블릭 도메인", page: "https://commons.wikimedia.org/wiki/File:L_to_R-_Howard_Hughes_%26_Sec%27y_Hull_LCCN2016873874.jpg" },
    facts: ["록히드 14 쌍발기와 승무원 네 명이 함께 날았습니다.", "1938년 7월 14일 뉴욕 도착. 91시간(3일 19시간 17분).", "앞선 기록(1933년, 약 186시간)을 거의 절반으로 줄였습니다."],
    inFilm: "5장. 실제 뉴스 화면과 퍼레이드 장면이 섞여 나옵니다. (사진은 같은 해 국무장관과 찍은 것으로, 비행 장면은 아닙니다.)",
  },
  {
    slug: "xf-11", name: "XF-11 정찰기", en: "Hughes XF-11", year: "1946",
    img: { src: "/img/xf11.jpg", alt: "비행 중인 XF-11 두 번째 시제기", credit: "위키미디어 공용, 퍼블릭 도메인 (1947년, 두 번째 시제기)", page: "https://commons.wikimedia.org/wiki/File:XF-11_banking_away.jpg" },
    facts: ["몸통이 두 개인 고속·고고도 사진 정찰기.", "1946년 7월 7일 첫 비행에서 뒤쪽 프로펠러가 거꾸로 돌기 시작해 추락했습니다.", "두 번째 시제기는 1947년 무사히 날았지만, 군은 다른 비행기를 골랐습니다."],
    inFilm: "7장. 영화에서 가장 큰 사고 장면.",
  },
  {
    slug: "h-4", name: "H-4 허큘리스 (‘스프루스 구스’)", en: "Hughes H-4 Hercules", year: "1947",
    img: { src: "/img/h4.jpg", alt: "물 위의 H-4 허큘리스", credit: "위키미디어 공용, 퍼블릭 도메인, 1947년 무렵", page: "https://commons.wikimedia.org/wiki/File:H-4_Hercules_2.jpg" },
    facts: ["전쟁 중 금속을 아끼려고 나무로 만든 거대한 비행정. 별명은 ‘가문비나무 거위’지만 실제로는 주로 자작나무입니다.", "날개폭 약 97.5m(319피트 11인치). 2019년까지 가장 긴 날개폭이었습니다.", "1947년 11월 2일 롱비치에서 단 한 번, 약 1마일을 수면 위 약 21m로 날았습니다. 지면 효과 높이를 벗어나지 못했다는 평가도 있습니다.", "지금은 오리건주 에버그린 항공우주박물관에 있습니다."],
    inFilm: "7–9장. 영화는 대부분 모형으로 찍었습니다.",
  },
  {
    slug: "constellation", name: "록히드 콘스텔레이션", en: "Lockheed Constellation", year: "1943",
    img: { src: "/img/constellation-twa.jpg", alt: "1952년 샌프란시스코 공항 정비 구역의 TWA 록히드 L-049 콘스텔레이션 ‘스타 오브 레바논’(N9414H)", credit: "사진: Bill Larkins, 1952년 샌프란시스코 공항 (TWA ‘Star of Lebanon’, N9414H)", page: "https://commons.wikimedia.org/wiki/File:Lockheed_L-049_Constellation,_Trans_World_Airlines_(TWA)_N9414H_(4851345521).jpg", license: { name: "CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0/" } },
    facts: ["꼬리날개가 세 개인 여압 여객기. 휴즈와 TWA가 개발을 이끌었습니다.", "TWA를 국제선 항공사로 키운 비행기입니다."],
    inFilm: "6장. 촬영에는 복원된 실제 TWA 슈퍼 콘스텔레이션이 쓰였습니다.",
  },
];

export const HIS_FILMS = [
  { title: "지옥의 천사들", en: "Hell's Angels", year: "1930", role: "제작·감독", img: { src: "/img/hells-angels.jpg", credit: "1930년 포스터, 퍼블릭 도메인", page: "https://commons.wikimedia.org/wiki/File:Poster_-_Hell%27s_Angels_(1930)_04.jpg" }, note: "1차 대전 공중전 영화. 무성에서 유성으로 다시 찍었고, 진 할로를 스타로 만들었습니다. 영화 2–3장." },
  { title: "스카페이스", en: "Scarface", year: "1932", role: "제작", img: { src: "/img/scarface.jpg", credit: "1932년 포스터, 퍼블릭 도메인", page: "https://commons.wikimedia.org/wiki/File:Scarface_(1932_film_poster).jpg" }, note: "하워드 혹스 감독의 갱 영화. 폭력 때문에 검열로 개봉이 늦어졌습니다. 1983년 리메이크의 원작입니다." },
  { title: "무법자", en: "The Outlaw", year: "1943 / 1946", role: "제작·감독", note: "서부극. 처음 감독이 떠나자 휴즈가 맡았습니다. 제인 러셀의 의상 때문에 검열과 오래 싸워, 1943년 잠깐 개봉 뒤 1946년 전국 개봉했습니다. 영화 6장." },
  { title: "그 밖의 작품", en: "Two Arabian Knights (1927), The Racket (1928), The Front Page (1931)", year: "1927–1931", role: "제작", note: "『두 아라비아 기사』는 감독이 아카데미상을 받았습니다." },
];

export const RELATED_FILMS = [
  { title: "멜빈과 하워드", en: "Melvin and Howard", year: "1980", note: "사막에서 노인을 태워 줬다는 주유소 직원 이야기. ‘모르몬 유언장’ 소동을 바탕으로 합니다." },
  { title: "어메이징 하워드 휴즈", en: "The Amazing Howard Hughes", year: "1977", note: "디트리히의 책을 바탕으로 한 TV 영화." },
  { title: "사기꾼", en: "The Hoax", year: "2006", note: "가짜 휴즈 자서전 사건(1972)을 다룹니다." },
  { title: "룰스 돈 어플라이", en: "Rules Don't Apply", year: "2016", note: "1950년대 말 휴즈 주변 사람들을 그린 영화." },
  { title: "카펫배거스", en: "The Carpetbaggers", year: "1964", note: "휴즈를 느슨하게 본뜬 소설의 영화로 자주 이야기됩니다." },
];

export const QUIZ = [
  { q: "휴즈가 물려받은 아버지의 회사는 무엇을 만들었나요?", options: ["비행기 엔진", "석유 드릴 날", "영화 카메라"], answer: 1, why: "휴즈 툴 회사의 석유 드릴 날이 재산의 바탕이었습니다." },
  { q: "『지옥의 천사들』을 찍다가 휴즈가 내린 큰 결정은?", options: ["컬러로 다시 찍기", "소리 있는 영화로 다시 찍기", "촬영 중단"], answer: 1, why: "『재즈 싱어』 이후 유성영화로 다시 찍었습니다." },
  { q: "H-1이 1935년 세운 기록 속도는?", options: ["시속 252마일", "시속 352마일", "시속 452마일"], answer: 1, why: "약 567km/h입니다." },
  { q: "기록 비행 뒤 H-1이 불시착한 곳은?", options: ["사탕무밭", "바닷가", "골프장"], answer: 0, why: "연료가 떨어져 사탕무밭에 내렸습니다." },
  { q: "1938년 세계 일주에 걸린 시간은?", options: ["약 91시간", "약 9일", "약 186시간"], answer: 0, why: "186시간은 그 전 기록입니다." },
  { q: "1946년 XF-11이 추락한 동네는?", options: ["라스베이거스", "베벌리힐스", "휴스턴"], answer: 1, why: "주택가에 떨어져 집 여러 채가 부서졌습니다." },
  { q: "H-4 허큘리스는 주로 무엇으로 만들었나요?", options: ["알루미늄", "나무(주로 자작나무)", "강철"], answer: 1, why: "별명은 ‘가문비나무 거위’지만 주로 자작나무입니다." },
  { q: "H-4 허큘리스는 몇 번 날았나요?", options: ["한 번", "열 번", "한 번도 못 날았다"], answer: 0, why: "1947년 11월 2일 단 한 번입니다." },
  { q: "영화의 ‘피츠 교수’는?", options: ["실존 기상학자", "창작 인물", "휴즈의 삼촌"], answer: 1, why: "AFI는 완전한 창작 인물이라고 적습니다." },
  { q: "영화 8장의 상영실 은둔은 실제로 언제 일에 가깝나요?", options: ["1930년", "1947년", "1958년 무렵"], answer: 2, why: "영화가 1947년으로 옮겼습니다." },
  { q: "휴즈가 세상을 떠난 곳은?", options: ["라스베이거스 호텔", "비행기 안", "런던"], answer: 1, why: "1976년 아카풀코에서 휴스턴으로 가는 비행기 안이었습니다." },
  { q: "휴즈가 1953년 세운, 지금도 있는 기관은?", options: ["의학연구소", "영화학교", "항공박물관"], answer: 0, why: "하워드 휴즈 의학연구소입니다." },
];

export const FILM = {
  ko: "에비에이터",
  en: "The Aviator",
  year: "2004",
  director: "마틴 스코세이지",
  writer: "존 로건",
  runtime: "약 170분",
  awards: "아카데미 5개 부문 수상: 여우조연상(케이트 블란쳇), 촬영, 편집, 미술, 의상.",
  look: "시대 분위기를 내려고 옛 2색 테크니컬러와 3색 테크니컬러 색감을 디지털로 재현했습니다.",
};
