'use client';

import Image from 'next/image';
import SVGLink from '@/styles/icons/link.svg';

export default function WaitingView() {
  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        alert('클립보드에 복사되었습니다.');
      } catch (error) {
        throw new Error('텍스트를 클립보드에 복사하는 중 에러 발생');
      }
    } else {
      alert('이 브라우저에서는 클립보드 복사가 지원되지 않습니다.');
    }
  };

  const handleLinkCopy = () => {
    const currentUrl = window.location.href;
    copyToClipboard(currentUrl);
  };

  return (
    <div className="flex w-full flex-col items-center gap-y-8">
      <div className="text-center text-xl">
        프로필 생성 중 <br />
        조금만 기다려 주세요!
      </div>

      <Image
        src="/unlocked-profile.png"
        alt="Sample Image"
        width={205}
        height={205}
        priority
      />

      <div className="text-center font-sfpro text-2xs font-bold text-white">
        AI 프로필이 완성되면 <br />
        이메일로 알림을 보내드립니다
      </div>

      <div className="flex h-[124px] w-full flex-col items-center gap-y-2 rounded-[20px] bg-white p-4 text-center">
        <div className="font-sfpro text-2xs font-bold">
          링크를 복사해두면 완성된 프로필을 <br />더 편하게 받아볼 수 있어요
        </div>
        <button
          type="button"
          onClick={handleLinkCopy}
          className="flex h-12 flex-row items-center justify-center gap-1 rounded-full bg-primary-darkblue px-6 font-cafe24 text-xl text-white"
        >
          링크복사
          <SVGLink />
        </button>
      </div>
    </div>
  );
}
