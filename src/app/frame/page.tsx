'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

function FrameSelectView() {
  const [isCircleSelected, setIsCircleSelected] = useState<string>('');
  const [isPremiumSelected, setIsPremiumSelected] = useState<boolean>(false);

  const frametype = isPremiumSelected ? PREMIUM_FRAME_DATA : BASIC_FRAME_DATA;
  const frameWidth = isCircleSelected === '/premiumframe2.png' ? 283 : 239;
  const frameHeight = isCircleSelected === '/premiumframe2.png' ? 332 : 290;
  const imgX = isCircleSelected === '/premiumframe2.png' ? 37 : 16;
  const imgY = isCircleSelected === '/premiumframe2.png' ? 37 : 16;
  const imageSrc = '/resultsample.png'; // 생성된 이미지(임시)

  const onCaptureClick = async () => {
    try {
      const scale = 4;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        throw new Error('Canvas context is not available.');
      }

      const canvasWidth = frameWidth * scale;
      const canvasHeight = frameHeight * scale;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const image1 = document.createElement('img');
      const image2 = document.createElement('img');
      image1.src = imageSrc;
      image2.src = isCircleSelected;

      await new Promise<void>((resolve, reject) => {
        image1.onload = () => {
          context.drawImage(
            image1,
            imgX * scale,
            imgY * scale,
            206 * scale,
            206 * scale,
          );
          image2.onload = () => {
            context.drawImage(image2, 0, 0, canvasWidth, canvasHeight);
            canvas.toBlob((blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'CAU_PUANG_FILM.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }
              resolve();
            }, 'image/png');
          };
          image2.onerror = reject;
        };
        image1.onerror = reject;
      });
    } catch (err) {
      console.error('Failed to capture image:', err);
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
              프리미엄
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
              프리미엄
            </button>
          </>
        )}
      </div>

      <div
        className={`relative flex ${isCircleSelected === '/premiumframe2.png' ? 'h-[332px] w-[283px]' : 'h-[290px] w-[239px]'} justify-center`}
      >
        <Image
          src={imageSrc}
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
            width={frameWidth}
            height={frameHeight}
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

export default FrameSelectView;
