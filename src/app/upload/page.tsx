'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageUpload from '@/app/upload/_components/ImageUpload';
import MyButton from '@/components/MyButton';
import PreviousPage from '@/components/PreviousPage';
import { IMAGE_WARNING, MAX_IMAGE_NUMBER, MIN_IMAGE_NUMBER } from '@/constants';
import { ImageFile } from '@/interfaces';

export default function PhotoUploadView() {
  const [images, setImages] = useState<ImageFile[]>([]);

  return (
    <div className="w-full text-primary-darkblue">
      <div className="mb-5 flex w-full flex-row justify-between px-4">
        <PreviousPage target="/" />
      </div>
      <div className="mb-3.5 flex items-center gap-6">
        <div>
          <Image
            src="/upload-puang.png"
            alt="푸앙이 프로필"
            width="72"
            height="72"
          />
        </div>
        <div className="flex items-end gap-1">
          <h2 className="whitespace-pre-line text-xl">
            {'사진은\n'}
            <span className="bg-white">최소 8장 이상</span>
            {'\n등록해주세요!'}
          </h2>
          <div className="text-3xs text-[#3C628C]">(최대 16장)</div>
        </div>
      </div>
      <ImageUpload
        images={images}
        setImages={setImages}
        min={MIN_IMAGE_NUMBER}
        max={MAX_IMAGE_NUMBER}
      />
      <p className="mb-6 mt-2.5 whitespace-pre-line font-sfpro text-3xs font-bold text-white">
        {IMAGE_WARNING}
      </p>
      <MyButton name="다음" target="/email" enabled={images.length >= 8} />
    </div>
  );
}
