'use client';

import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import { BASIC_FRAME_DATA, PREMIUM_FRAME_DATA } from '@/constants';
import SVGDownload from '@/styles/icons/download.svg';
import SVGGoToList from '@/styles/icons/gotolist.svg';

interface FrameProps {
  circle: string;
  description: string;
  onClick: () => void;
}
function SelectFrame({ circle, description, onClick }: FrameProps) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      <Image
        src={circle}
        alt={description}
        width={40}
        height={40}
        priority
        className="relative"
      />
    </button>
  );
}

export default function FrameSelectView() {
  const [isCircleSelected, setIsCircleSelected] = useState<string>('');
  const [isPremiumSelected, setIsPremiumSelected] = useState<boolean>(false);

  const frametype = isPremiumSelected ? PREMIUM_FRAME_DATA : BASIC_FRAME_DATA;
  const ref = useRef<HTMLDivElement>(null);
  // const onCaptureClick = async () => {
  //   if (ref.current === null) {
  //     return;
  //   }

  //   const canvas = await html2canvas(ref.current, { scale: 1 }); // scale 기본값으로 변경
  //   const originalWidth = canvas.width;
  //   const originalHeight = canvas.height;

  //   // 새로운 캔버스 생성
  //   const newCanvas = document.createElement('canvas');
  //   newCanvas.width = 239; // 원하는 가로 크기
  //   newCanvas.height = 290; // 원하는 세로 크기
  //   const newCtx = newCanvas.getContext('2d');

  //   if (newCtx) {
  //     // 원본을 새 캔버스 크기에 맞게 그리기
  //     newCtx.drawImage(
  //       canvas,
  //       0,
  //       0,
  //       originalWidth,
  //       originalHeight, // 원본의 전체 크기
  //       0,
  //       0,
  //       newCanvas.width,
  //       newCanvas.height, // 새 캔버스의 크기에 맞게 그리기
  //     );

  //     // Blob 생성 후 다운로드
  //     newCanvas.toBlob((blob) => {
  //       if (blob !== null) {
  //         saveAs(blob, 'CAU_PUANG_FILM.png');
  //       }
  //     });
  //   }
  // };
  // const onCaptureClick = async () => {
  //   if (ref.current === null) {
  //     return;
  //   }

  //   const captureImg = async () => {
  //     if (ref.current) {
  //       const canvas = await html2canvas(ref.current, { scale: 1 });
  //       canvas.toBlob((blob) => {
  //         if (blob !== null) {
  //           saveAs(blob, 'CAU_PUANG_FILM.png');
  //         }
  //       });
  //     }
  //   };

  //   captureImg();
  // };
  const onCaptureClick = async () => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setTimeout(async () => {
        const canvas = await html2canvas(ref.current as HTMLElement, {
          scale: 1,
          useCORS: true, // CORS 문제 해결
          allowTaint: true, // Tainted canvas 오류 방지
          width: offsetWidth,
          height: offsetHeight,
          scrollX: 0,
          scrollY: 0,
        });

        canvas.toBlob((blob) => {
          if (blob !== null) {
            saveAs(blob, 'CAU_PUANG_FILM.png');
          }
        });
      }, 500); // 500ms 딜레이 후 실행
    }
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between px-4">
        <PreviousPage target="/" />
        <Link href="/list" className="pr-4">
          <SVGGoToList />
        </Link>
      </div>
      <h1 className="text-xl">AI 프로필이 완성!</h1>
      <h2 className="py-1 font-sfpro text-2xs font-bold text-white">
        사진과 어울리는 프레임을 선택해주세요 😀
      </h2>
      <div className="text-2sx mb-6 mt-4 flex h-[35px] w-[183px] flex-row items-center justify-evenly rounded-full bg-white font-sfpro font-bold">
        {isPremiumSelected ? (
          <>
            <button
              type="button"
              onClick={() => setIsPremiumSelected(false)}
              className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-white text-primary-middlegray"
            >
              기본
            </button>
            <div className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-primary-darkblue text-white">
              프리미엄{' '}
            </div>
          </>
        ) : (
          <>
            <div className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-primary-darkblue text-white">
              기본
            </div>
            <button
              type="button"
              onClick={() => setIsPremiumSelected(true)}
              className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-white text-primary-middlegray"
            >
              프리미엄{' '}
            </button>
          </>
        )}
      </div>

      <div
        ref={ref}
        className={`relative flex ${isCircleSelected === '/premiumframe2.png' ? 'h-[332px] w-[283px]' : 'h-[290px] w-[239px]'} justify-center`}
      >
        <Image
          src="/resultsample.png"
          alt="Sample Image"
          width={206}
          height={206}
          priority
          className="absolute mt-4"
        />
        {isCircleSelected && isCircleSelected !== '' && (
          <Image
            src={isCircleSelected}
            alt="Selected Frame"
            width={isCircleSelected === '/premiumframe2.png' ? 283 : 239}
            height={isCircleSelected === '/premiumframe2.png' ? 332 : 290}
            priority
            className={`relative ${isCircleSelected === '/premiumframe2.png' ? '-mt-5 mb-6' : ''}`}
          />
        )}
      </div>

      <div
        className={`flex flex-row gap-x-2.5 ${isCircleSelected === '/premiumframe2.png' ? '-mt-5 pb-6' : 'py-6'}`}
      >
        {Object.entries(frametype).map(([key, frame]) => (
          <SelectFrame
            key={key}
            {...frame}
            onClick={() => setIsCircleSelected(frame.frame)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onCaptureClick}
        className="flex h-12 w-full items-center justify-center gap-x-3 rounded-full bg-primary-darkblue text-xl text-white"
      >
        <SVGDownload />
        다운로드
      </button>
    </div>
  );
}
