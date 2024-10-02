import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { v4 as uuidv4 } from 'uuid';
import {
  PRIVACY_INTRO,
  privacySections,
  privacySections2,
  privacySections3,
  Table1,
  Table2,
} from '@/constants';
import { PrivacySectionProps } from '@/interfaces';
import 'react-spring-bottom-sheet/dist/style.css';

const formattedContent = (text: string) => {
  const LineBreaks = text
    .replace(/([*|-])\s/g, ' $1 ')
    .replace(/(\d+\.\s|[\u2460-\u2469]\s)/g, '<br>$1')
    .split('<br>')
    .map((item) => {
      const trimmedItem = item.trim();
      let paddingLeft = '0px';

      if (trimmedItem.startsWith('*')) {
        paddingLeft = '16px';
      } else if (trimmedItem.startsWith('-')) {
        paddingLeft = '10px';
      } else if (/^\d+\./.test(trimmedItem)) {
        paddingLeft = '6px';
      }
      return (
        <div key={uuidv4()} style={{ paddingLeft }}>
          {item}
        </div>
      );
    });
  return LineBreaks;
};
function PrivacySectionComponent({
  section,
}: {
  section: PrivacySectionProps;
}) {
  return (
    <div>
      <div className="pt-4 text-2xs font-bold">{section.title}</div>
      <div>{formattedContent(section.content)}</div>
    </div>
  );
}

function PrivacyPolicyBody() {
  return (
    <div className="font-sfpro text-2xs">
      {PRIVACY_INTRO}
      {privacySections.map((section) => (
        <PrivacySectionComponent key={section.title} section={section} />
      ))}
      <Table1 />
      {privacySections2.map((section) => (
        <PrivacySectionComponent key={section.title} section={section} />
      ))}
      <Table2 />
      {privacySections3.map((section) => (
        <PrivacySectionComponent key={section.title} section={section} />
      ))}
      <div className="gap-y-4 pb-28 pt-8 font-bold">
        약관 시행일 2024.10.01.
        <br /> 푸앙이 사진관 서비스에 대해 궁금하신 사항은 책임자
        이메일(yymin1022@gmail.com)로 문의해주시기 바랍니다.
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-primary-lightblue mb-2 inline-block border-b-2 border-[#5F9FC0] font-sfpro text-2xs font-bold opacity-20"
      >
        개인정보 수집 및 이용 정책 {'>'}
      </button>

      <BottomSheet
        open={open}
        snapPoints={({ maxHeight }) => [maxHeight * 0.8, maxHeight]}
      >
        <div className="p-8">
          <div className="pb-4 text-xl">
            푸앙이 사진관 <br />
            개인정보 수집 및 이용 동의
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="fixed bottom-12 flex h-12 w-[85%] items-center justify-center rounded-full bg-primary-darkblue px-8 text-xl text-white shadow-xl shadow-gray-300"
            >
              확인
            </button>
          </div>
          <PrivacyPolicyBody />
        </div>
      </BottomSheet>
    </div>
  );
}
