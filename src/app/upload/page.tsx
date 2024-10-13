'use client';

import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageUpload from '@/app/upload/_components/ImageUpload';
import PreviousPage from '@/components/PreviousPage';
import {
  IMAGE_WARNING,
  MAX_IMAGE_NUMBER,
  MIN_IMAGE_NUMBER,
  UPLOAD_ERROR_CHECK_MSG,
  UPLOAD_ERROR_MSG,
} from '@/constants';
import { ImageFile, ROUTE_TYPES } from '@/interfaces';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';
import { imageUrlsAtom } from '@/store/atoms/imageUrlAtom';

export default function PhotoUploadView() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const setImageUrls = useSetAtom(imageUrlsAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setErrorCheckMessage = useSetAtom(errorCheckMessageAtom);

  const router = useRouter();

  const isDisabled =
    images.length < MIN_IMAGE_NUMBER || images.length > MAX_IMAGE_NUMBER;

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach(({ file }) => {
      formData.append('files', file);
    });

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setImageUrls(data.urls);
        router.push(ROUTE_TYPES.EMAIL);
      }
    } catch (error) {
      console.error('Failed to upload images:', error);
      setErrorMessage(UPLOAD_ERROR_MSG);
      setErrorCheckMessage(UPLOAD_ERROR_CHECK_MSG);
      router.push(ROUTE_TYPES.ERROR);
    }
  };

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

      <button
        type="button"
        onClick={handleUpload}
        disabled={isDisabled}
        className={`flex h-12 w-full items-center justify-center gap-5 rounded-full text-xl ${!isDisabled ? 'bg-primary-darkblue text-white' : 'cursor-not-allowed bg-primary-gray text-primary-darkgray'}`}
      >
        다음
      </button>
    </div>
  );
}
