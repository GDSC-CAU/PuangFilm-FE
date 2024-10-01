import React from 'react';

function formatText(text: string) {
  return text.replace(/(\d+\.\s|-\s|\*\s)/g, '<br>$1');
}

interface PrivacySection {
  title: string;
  content: string;
}

function Table1() {
  return (
    <table className="my-2">
      <thead>
        <tr>
          <th className="border border-black p-2">수집 / 이용목적</th>
          <th className="border border-black p-2">필수 / 선택</th>
          <th className="border border-black p-2">수집 및 이용항목</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            purpose: '회원가입 및 회원관리',
            necessity: '필수',
            items: '카카오 계정 정보 ( 닉네임, 이용자 식별자, 이메일주소 )',
          },
          {
            purpose: '재화 또는 서비스 제공',
            necessity: '필수',
            items: '이용자 사진',
          },
          {
            purpose: '고충처리',
            necessity: '필수',
            items: '이메일 주소',
          },
          {
            purpose: '마케팅',
            necessity: '선택',
            items: '카카오 계정 정보 ( 이용자 식별자, 이메일주소 )',
          },
        ].map((row, index) => (
          <tr key={index}>
            <td className="border border-black p-2">{row.purpose}</td>
            <td className="border border-black p-2">{row.necessity}</td>
            <td className="border border-black p-2">{row.items}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function Table2() {
  return (
    <table className="my-2">
      <thead>
        <tr>
          <th className="border border-black p-2">이름</th>
          <th className="border border-black p-2">담당</th>
          <th className="border border-black p-2">연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black p-2">유용민</td>
          <td className="border border-black p-2">프로젝트 진행 담당자</td>
          <td className="border border-black p-2">yymin1022@gmail.com</td>
        </tr>
      </tbody>
    </table>
  );
}
const formattedContent = (text: string) => {
  const htmlWithLineBreaks = text
    .replace(/([*|-])\s/g, ' $1 ')
    .replace(/(\d+\.\s|[\u2460-\u2469]\s)/g, '<br>$1')
    .split('<br>')
    .map((item, idx) => {
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
        <div key={`${item}-${idx}`} style={{ paddingLeft }}>
          {item}
        </div>
      );
    });
  return htmlWithLineBreaks;
};

const privacySections: PrivacySection[] = [
  {
    title: '제1조 (개인정보의 처리 목적)',
    content:
      formatText(`➀ 우리는 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 개인정보를 이용하지 않습니다. 이용 목적이 변경되는 경우 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
<br>또한 우리는 만 14세 이상의 이용자를 대상으로 서비스를 제공하며, 만 14세 미만 아동의 개인정보가 수집된 사실을 인지하는 경우 해당 정보를 지체없이 삭제하겠습니다.
1. 서비스 특성상 카카오 계정으로만 이용이 가능하므로 회원 가입 및 관리는 카카오의 개인정보처리방침을 따릅니다. 카카오 개인정보처리방침은 회원 가입의사 확인과 회원자격 유지 및 관리, 서비스 제공·개선 등의 목적으로 개인정보를 처리합니다.
2. 재화 또는 서비스 제공, 결제, 서비스 관련 공지사항 전달, 고객 만족도 조사, 마케팅 및 광고에의 활용을 위해 개인정보를 처리합니다.
3. 고충처리, 고객 문의 처리, 분쟁해결, 처리 결과 통보, 법령상 의무 이행을 위한 의사소통 등의 목적으로 개인정보를 처리합니다.
4. 이벤트 응모 등 참여 기회 제공을 위해 개인정보를 처리합니다.
       `),
  },
  {
    title: '제2조 (개인정보의 보유 및 이용기간)',
    content:
      formatText(`① 우리는 이용자의 개인정보를 이용목적에 필요한 기간 내에서 이용 및 보유합니다. 보유기간이 기재되어 있지 않은 경우 우리는 관계법령의 규정에 의한 보존기간까지만 개인정보를 이용합니다. 우리는 보유기간이 종료한 후에는 해당 개인정보를 지체없이 파기합니다.
② 각각의 개인정보 처리 및 보유기간은 다음과 같습니다.
1. 회원 가입 및 관리 : 회원 탈퇴 시까지, 다만 다음 사유에 해당하는 경우에는 해당 사유 종료 시까지
- 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지
- 서비스 이용에 따른 채권, 채무 관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지
* 탈퇴 방법 : 카카오톡 더보기 > 설정 > 카카오계정 > 연결된 서비스 관리 > 외부 서비스 > 푸앙이 사진관 채널 선택 > 연결 끊기
1. 재화 또는 서비스 제공  
    - 이용자가 제공한 사진, 성별, 스타일 옵션 : 서비스 종료 당일까지
    - 결과물 : 서비스 종료 당일까지
2. 고충처리 : 고충 처리 완료 시까지
3. 이벤트 응모 : 해당 이벤트 종료시까지 또는 당첨자에게 상품 전달 시까지
4. 마케팅 활용 : 회원 탈퇴 및 마케팅 활용 동의 철회 시까지 시까지
5. 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
    - 「전자상거래 등에서의 소비자보호에 관한 법률」
        * 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
        * 계약 또는 청약철회 등에 관한 기록 : 5년
        * 대금결제 및 재화 등의 공급에 관한 기록 : 5년
        * 표시ㆍ광고에 관한 기록 : 6개월
    - 「통신비밀보호법」
        * 서비스 이용 관련 정보(접속로그) : 3개월`),
  },
  {
    title: '제3조 (수집하는 개인정보의 항목)',
    content: formatText(`① 우리는 다음의 개인정보 항목을 처리하고 있습니다.`),
  },
];
const privacySections2: PrivacySection[] = [
  {
    title: '',
    content: formatText(`② 제3자로부터 제공받는 개인정보 항목은 다음과 같습니다.
- 제공하는 업체명: 푸앙이 사진관
- 제공받는 항목: 카카오계정(이메일), 닉네임, 카카오톡 채널 추가 상태 및 내역
- 제공받는 목적: 푸앙이 사진관 서비스 제공
③ 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.
- 서비스 이용 기록, 결제 내역, 접속로그 `),
  },
  {
    title: '제4조 (개인정보의 파기)',
    content:
      formatText(`① 우리는 이용자로부터 동의 받은 개인정보의 보유 기간이 경과하거나 처리 목적이 달성되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
② 이용자로부터 동의받은 개인정보의 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
③ 개인정보 파기 절차 및 방법은 다음과 같습니다.
1. 파기절차 : 우리는 파기 사유가 발생한 개인정보를 선정하고 파기합니다.
2. 파기방법 : 우리는 전자적 파일 형태로 기록, 저장된 개인정보는 기록을 복구 및 재생할 수 없도록 안전하게 삭제하고, 그 밖에 종이 문서에 기록, 저장된 개인정보는 분쇄하거나 소각하여 파기합니다.`),
  },
  {
    title: '제5조 (개인정보의 제3자 제공 및 처리위탁)',
    content: formatText(
      `우리는 법령에 규정된 경우를 제외하고는 제3자에게 개인정보를 제공하지 않으며, 제공하게 될 경우 이용자에게 동의를 받겠습니다. 우리는 AI 프로필 서비스 관련 개인정보 처리를 외부에 위탁하고 있지 않습니다.`,
    ),
  },
  {
    title: '제6조 (이용자와 법정대리인의 권리·의무 및 행사방법)',
    content: formatText(
      `① 이용자는 우리에게 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 이용자의 권리 행사는 전자우편, 서면을 통해 하실 수 있으며 우리는 이에 대해 지체 없이 처리하겠습니다.
② 제 1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통해 하실 수 있습니다. 이 경우“개인정보 처리 방법에 관한 고시(제2020-7호)”별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
③ 우리는 이용자의 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 요구한 자가 본인이거나 정당한 대리인인지를 확인합니다.
④ 정보 열람 및 처리 정지 요구는 개인정보보호법에 의하여 그 권리가 제한될 수 있습니다.
⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우 그 삭제를 요구할 수 없습니다.`,
    ),
  },
  {
    title: '제7조 (개인정보의 안전성 확보조치)',
    content: formatText(
      `① 우리는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
1. 관리적 조치 : 정기적인 접속기록 점검, 정보보안 관련 임직원 교육, 내부관리계획 수립·시행 등
2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 사용자 이미지 보안처리, 고유식별정보 등의 암호화 등`,
    ),
  },
  {
    title: '제8조 (개인정보 보호책임자)',
    content: formatText(
      `① 우리는 개인정보 처리에 관한 업무를 총괄하고 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.`,
    ),
  },
];
const privacySections3: PrivacySection[] = [
  {
    title: '',
    content:
      formatText(`② 개인정보와 관련한 문의사항 및 의견사항, 서비스 이용 중 개인정보의 유출 가능성 등 정보주체의 권익이 침해될 우려가 있는 사실을 발견하였을 경우에는 위 개인정보 보호책임자 또는 담당 부서에 연락주시면 즉시 조치하여 처리결과를 통보하겠습니다.
③ 또한, 개인정보침해로 인한 피해구제, 상담 등을 위해 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 문의하실 수 있습니다.
- 개인정보 분쟁조정위원회: 1833 6972 ([www.kopico.go.kr](http://www.kopico.go.kr/))
- 개인정보침해신고센터: (국번없이) 118 ([privacy.kisa.or.kr](http://privacy.kisa.or.kr/))
- 경찰청 사이버안전지킴이: (국번없이) 182 ([cyberbureau.police.go.kr](http://cyberbureau.police.go.kr/)) `),
  },
  {
    title: '제9조 (개인정보 처리방침의 변경 및 고지)',
    content: formatText(
      `본 개인정보처리방침의 변경이 있을 경우 개정 최소 7일 전에 공지를 할 예정입니다. 또한 수집하는 개인정보의 항목,이용목적의 변경 등과 같이 이용자의 중대한 변경이 발생할 필요 시 이용자의 동의를 다시 받을 수도 있습니다.`,
    ),
  },
];
function PrivacySectionComponent({ section }: { section: PrivacySection }) {
  return (
    <div key={section.title}>
      <div className="pt-4 text-2xs font-bold">{section.title}</div>
      <div>{formattedContent(section.content)}</div>
    </div>
  );
}

export const PRIVACY_POLICY_CONTENTS = (
  <div className="font-sfpro text-2xs">
    <p>
      푸앙이 사진관(이하 “우리”라고 합니다)은 「개인정보 보호법」에 따라
      이용자의 개인정보를 보호하고 이와 관련된 고충을 원활하게 처리할 수 있도록
      다음과 같은 개인정보처리방침에 따라 개인정보를 처리하고 있습니다. 본
      개인정보처리방침은 우리가 운영하는 푸앙이 사진관 서비스의
      개인정보처리방침입니다.
    </p>
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
    <div className="gap-y-4 pt-8">
      약관 시행일 2024.10.01.
      <br /> 푸앙이 사진관 서비스에 대해 궁금하신 사항은 책임자
      이메일(yymin1022@gmail.com)로 문의해주시기 바랍니다.
    </div>
  </div>
);
