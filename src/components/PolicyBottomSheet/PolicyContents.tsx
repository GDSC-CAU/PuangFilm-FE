import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  HEADERTITLES1,
  HEADERTITLES2,
  PRIVACY_INTRO,
  PRIVACY_SECTION,
  PRIVACY_SECTION2,
  PRIVACY_SECTION3,
  TABLECONTENTS1,
  TABLECONTENTS2,
} from '@/constants';
import { PrivacySectionProps } from '@/interfaces';

export function Table1() {
  return (
    <table className="my-2">
      <thead>
        <tr>
          {HEADERTITLES1.map((title, index) => (
            <th key={index} className="border border-black p-2">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLECONTENTS1.map((row) => (
          <tr key={row.items}>
            <td className="border border-black p-2">{row.purpose}</td>
            <td className="border border-black p-2">{row.necessity}</td>
            <td className="border border-black p-2">{row.items}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export function Table2() {
  return (
    <table className="my-2">
      <thead>
        <tr>
          {HEADERTITLES2.map((title, index) => (
            <th key={index} className="border border-black p-2">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {TABLECONTENTS2.map((row, index) => (
            <td key={index} className="border border-black p-2">
              {row}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
function formatText(text: string) {
  return text.replace(/(\d+\.\s|-\s|\*\s)/g, '<br>$1');
}
export const privacySections: PrivacySectionProps[] = [
  {
    title: PRIVACY_SECTION.TITLE1,
    content: formatText(PRIVACY_SECTION.CONTENT1),
  },
  {
    title: PRIVACY_SECTION.TITLE2,
    content: formatText(PRIVACY_SECTION.CONTENT2),
  },
  {
    title: PRIVACY_SECTION.TITLE3,
    content: formatText(PRIVACY_SECTION.CONTENT3),
  },
];
export const privacySections2: PrivacySectionProps[] = [
  {
    title: PRIVACY_SECTION2.TITLE4,
    content: formatText(PRIVACY_SECTION2.CONTENT4),
  },
  {
    title: PRIVACY_SECTION2.TITLE5,
    content: formatText(PRIVACY_SECTION2.CONTENT5),
  },
  {
    title: PRIVACY_SECTION2.TITLE6,
    content: formatText(PRIVACY_SECTION2.CONTENT6),
  },
  {
    title: PRIVACY_SECTION2.TITLE7,
    content: formatText(PRIVACY_SECTION2.CONTENT7),
  },
  {
    title: PRIVACY_SECTION2.TITLE8,
    content: formatText(PRIVACY_SECTION2.CONTENT8),
  },
  {
    title: PRIVACY_SECTION2.TITLE9,
    content: formatText(PRIVACY_SECTION2.CONTENT9),
  },
];
export const privacySections3: PrivacySectionProps[] = [
  {
    title: PRIVACY_SECTION3.TITLE10,
    content: formatText(PRIVACY_SECTION3.CONTENT10),
  },
  {
    title: PRIVACY_SECTION3.TITLE11,
    content: formatText(PRIVACY_SECTION3.CONTENT11),
  },
];

const formattedContent = (text: string) => {
  return text
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

export function PolicyContent() {
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
