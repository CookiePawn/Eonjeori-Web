import type { Metadata } from "next";
import LegalPage from "../legal-page";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 언저리",
  description: "언저리 서비스 개인정보처리방침입니다.",
};

const sections = [
  {
    title: "수집하는 정보",
    body: "언저리는 사용자가 앱 안에서 입력한 현재 모은 돈, 대출 포함 여부, 대출 가능 금액, 희망 지역 정보를 기기 내부 저장소에 저장합니다.",
  },
  {
    title: "정보의 이용 목적",
    body: "입력 정보는 구매력 계산, 희망 지역 결과 표시, 지역별 비교 결과를 제공하기 위해서만 사용됩니다.",
  },
  {
    title: "실거래 데이터 활용",
    body: "언저리는 국토교통부 실거래가공개시스템 자료를 활용합니다. 지원 URL은 https://rt.molit.go.kr/pt/xls/xls.do 입니다. 해당 데이터는 국토교통부에서 제공하는 공식 데이터를 활용하여 최대한 의미 있는 정보를 제공하기 위해 사용됩니다.",
  },
  {
    title: "외부 전송 여부와 원격 데이터",
    body: "현재 앱은 사용자가 입력한 자금 및 희망 지역 정보를 자체 서버로 전송하지 않습니다. 다만 최신 실거래 데이터베이스 확인 및 다운로드를 위해 원격 저장소에 접속할 수 있습니다.",
  },
  {
    title: "Firebase Analytics",
    body: "언저리는 앱 사용 흐름과 기능 개선을 위해 Google Firebase Analytics를 사용할 수 있습니다. 이 과정에서 앱 실행 정보, 화면 이동, 기기 및 앱 환경 정보 등이 Google의 정책에 따라 처리될 수 있습니다.",
  },
  {
    title: "Google AdMob",
    body: "언저리는 앱 내 일부 화면에 Google AdMob 배너 광고를 표시할 수 있습니다. 광고 제공 과정에서 광고 식별자, 기기 정보, 광고 노출 및 상호작용 정보 등이 Google의 정책에 따라 처리될 수 있습니다.",
  },
  {
    title: "보관 및 삭제",
    body: "입력 정보는 앱의 로컬 저장소에 보관됩니다. 앱을 삭제하거나 입력 정보를 다시 계산해 저장하면 기존 정보가 변경 또는 삭제될 수 있습니다.",
  },
  {
    title: "피드백 메일",
    body: "피드백 보내기 기능을 사용하는 경우 사용자가 직접 작성한 메일 내용과 발신자 정보는 사용자의 메일 앱 및 메일 서비스 정책에 따라 처리됩니다.",
  },
  {
    title: "문의",
    body: "개인정보 처리와 관련한 문의는 dev.jcahn@gmail.com 으로 보내 주세요.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보처리방침"
      intro="언저리는 필요한 정보를 최소한으로 사용하고, 사용자의 입력 정보를 기기 안에서 안전하게 다루는 것을 기본 원칙으로 합니다."
      sections={sections}
    />
  );
}
