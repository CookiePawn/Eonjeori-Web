import type { Metadata } from "next";
import LegalPage from "../legal-page";

export const metadata: Metadata = {
  title: "이용약관 | 언저리",
  description: "언저리 서비스 이용약관입니다.",
};

const sections = [
  {
    title: "서비스의 성격",
    body: "언저리는 사용자가 입력한 자금 정보와 앱에 포함된 아파트 실거래 데이터를 바탕으로 구매 가능 면적과 지역별 비교 정보를 제공하는 참고용 서비스입니다.",
  },
  {
    title: "정보의 한계",
    body: "앱에서 제공하는 계산 결과는 실제 매매 가능 여부, 대출 승인, 세금, 중개 수수료, 시장 상황 등을 보장하지 않습니다. 중요한 의사결정 전에는 반드시 최신 공시 자료와 전문가 상담을 함께 확인해 주세요.",
  },
  {
    title: "데이터 출처",
    body: "언저리는 국토교통부 실거래가공개시스템 자료를 활용합니다. 지원 URL은 https://rt.molit.go.kr/pt/xls/xls.do 입니다. 해당 데이터는 국토교통부에서 제공하는 공식 데이터를 활용하여 최대한 의미 있는 정보를 제공하기 위해 사용됩니다.",
  },
  {
    title: "사용자의 책임",
    body: "사용자는 본인의 상황에 맞는 정확한 정보를 입력해야 하며, 입력값에 따라 결과가 달라질 수 있습니다. 서비스 이용 결과에 따른 최종 판단과 책임은 사용자에게 있습니다.",
  },
  {
    title: "광고 및 분석 도구",
    body: "언저리는 서비스 운영과 개선을 위해 Google Firebase Analytics를 사용할 수 있으며, 앱 내 일부 화면에 Google AdMob 배너 광고가 표시될 수 있습니다. 광고 및 분석 도구의 동작은 각 제공사의 정책을 따릅니다.",
  },
  {
    title: "서비스 변경",
    body: "데이터 출처, 계산 방식, 화면 구성은 더 나은 서비스를 위해 변경될 수 있습니다. 변경이 필요한 경우 앱 업데이트를 통해 반영됩니다.",
  },
  {
    title: "문의",
    body: "서비스 이용 중 궁금한 점이나 개선 의견은 dev.jcahn@gmail.com 으로 보내 주세요.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="이용약관"
      intro="언저리를 이용해 주셔서 감사합니다. 아래 내용은 서비스를 안전하고 올바르게 이용하기 위한 기본 안내입니다."
      sections={sections}
    />
  );
}
