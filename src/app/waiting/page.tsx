'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import SVGLink from '@/styles/icons/link.svg';

export default function WaitingView() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const copyRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const copyToClipboardFunc = () => {
    if (copyRef.current) {
      copyRef.current.click();
    }
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
          onClick={copyToClipboardFunc}
          className="flex h-12 flex-row items-center justify-center gap-1 rounded-full bg-primary-darkblue px-6 font-cafe24 text-xl text-white"
        >
          링크복사
          <SVGLink />
        </button>
        {url && (
          <CopyToClipboard
            text={url}
            onCopy={() => {
              alert('클립보드에 복사되었습니다.');
            }}
          >
            <button
              type="button"
              ref={copyRef}
              style={{ display: 'none' }}
              aria-label="링크 복사 버튼"
            />
          </CopyToClipboard>
        )}
      </div>
    </div>
  );
}
