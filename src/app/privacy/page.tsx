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
    title: "외부 전송 여부",
    body: "현재 앱은 사용자가 입력한 정보를 별도 서버로 전송하거나 제3자에게 제공하지 않습니다. 피드백 메일을 보내는 경우, 사용자가 직접 작성한 메일 내용과 발신자 정보는 메일 서비스 정책에 따라 처리됩니다.",
  },
  {
    title: "보관 및 삭제",
    body: "입력 정보는 앱의 로컬 저장소에 보관됩니다. 앱을 삭제하거나 입력 정보를 다시 계산해 저장하면 기존 정보가 변경 또는 삭제될 수 있습니다.",
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
