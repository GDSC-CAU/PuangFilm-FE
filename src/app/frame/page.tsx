'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import { BASIC_FRAME_DATA, PREMIUM_FRAME_DATA } from '@/constants';
import { ROUTE_TYPES } from '@/interfaces';
import { selectedPhotoAtomWithStorage } from '@/store/atoms/selectedPhotoAtomWithStorage';
import SVGDownload from '@/styles/icons/download.svg';
import SVGGoToList from '@/styles/icons/gotolist.svg';
import DownloadImage from '@/utils/DownloadImage';
import SelectFrame from './_components/SelectFrame';

export default function FrameSelectView() {
  const [colorOfCircle, setColorOfCircle] = useState<string>('');
  const [isPremiumSelected, setIsPremiumSelected] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useAtom(
    selectedPhotoAtomWithStorage,
  );
  const [isClient, setIsClient] = useState(false);
  const frametype = isPremiumSelected ? PREMIUM_FRAME_DATA : BASIC_FRAME_DATA;
  const frameWidth = colorOfCircle === '/premiumframe2.png' ? 283 : 239;
  const frameHeight = colorOfCircle === '/premiumframe2.png' ? 332 : 290;
  const examplepng = '/resultsample.png'; // ai로 생성된 이미지로 변하게 될 예정
  const imageSrc = selectedPhoto === '' ? examplepng : selectedPhoto;
  const path = usePathname();

  // // setSelectedPhoto('/test.png');
  // useEffect(() => {
  //   setSelectedPhoto('');
  // }, [path]);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const savedPhoto = localStorage.getItem('selectedPhoto');
      if (savedPhoto) {
        setSelectedPhoto(JSON.parse(savedPhoto));
      }
    }
  }, [setSelectedPhoto]);
  useEffect(() => {
    const handleBeforeUnload = () => {
      // 페이지를 떠나기 전에 selectedPhoto 초기화
      setSelectedPhoto('');
      // localStorage.setItem('selectedPhoto', JSON.stringify(''));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [setSelectedPhoto]);

  if (!isClient) {
    return null;
  }
  const onCaptureClick = () => {
    DownloadImage({ colorOfCircle, imageSrc, frameWidth, frameHeight });
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between px-4">
        <PreviousPage target={ROUTE_TYPES.HOME} />
        <Link href="/list" className="pr-4">
          <SVGGoToList />
        </Link>
      </div>
      <h1 className="text-xl">AI 프로필이 완성!</h1>
      <h2 className="py-1 font-sfpro text-2xs font-bold text-white">
        사진과 어울리는 프레임을 선택해주세요 😀
      </h2>
      <div className="text-2sx mb-6 mt-4 flex h-[35px] w-[183px] flex-row items-center justify-evenly rounded-full bg-white font-sfpro font-bold">
        <button
          type="button"
          onClick={() => setIsPremiumSelected(false)}
          className={`flex h-[27px] w-[86px] items-center justify-center rounded-full ${isPremiumSelected ? 'bg-white text-primary-middlegray' : 'bg-primary-darkblue text-white'}`}
        >
          기본
        </button>
        <button
          type="button"
          onClick={() => setIsPremiumSelected(true)}
          className={`flex h-[27px] w-[86px] items-center justify-center rounded-full ${isPremiumSelected ? 'bg-primary-darkblue text-white' : 'bg-white text-primary-middlegray'}`}
        >
          프리미엄
        </button>
      </div>

      <div
        className={`relative flex ${colorOfCircle === '/premiumframe2.png' ? 'h-[332px] w-[283px]' : 'h-[290px] w-[239px]'} justify-center`}
      >
        <Image
          src={imageSrc}
          alt="Sample Image"
          width={206}
          height={206}
          priority
          className="absolute mt-4"
        />
        {colorOfCircle && colorOfCircle !== '' && (
          <Image
            src={colorOfCircle}
            alt="Selected Frame"
            width={frameWidth}
            height={frameHeight}
            priority
            className={`relative ${colorOfCircle === '/premiumframe2.png' ? '-mt-5 mb-6' : ''}`}
          />
        )}
      </div>

      <div
        className={`flex flex-row gap-x-2.5 ${colorOfCircle === '/premiumframe2.png' ? '-mt-5 pb-6' : 'py-6'}`}
      >
        {Object.entries(frametype).map(([key, frame]) => (
          <SelectFrame
            key={key}
            {...frame}
            onClick={() => setColorOfCircle(frame.frame)}
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
