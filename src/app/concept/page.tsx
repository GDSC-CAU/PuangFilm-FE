'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import MyButton from '@/components/MyButton';
import {
  gender,
  GenderStateUnion,
  selectedBoxAtom,
} from '@/store/atoms/selectedBoxAtom';

export default function SelectConceptView() {
  const [selectedBox, setSelectedBox] = useAtom(selectedBoxAtom);

  const handleBoxClick = (box: GenderStateUnion) => {
    if (selectedBox === box) {
      setSelectedBox(gender.none);
    } else {
      setSelectedBox(box);
    }
  };

  return (
    <div className="relative mx-5 flex w-full flex-col gap-10">
      <p className="mt-10 text-start font-cafe24 text-xl text-primary-darkblue">
        어떤 컨셉의 <br />
        프로필을 만들어볼까요?
      </p>
      <p className="text-center font-sfpro text-sm text-white">
        원하는 느낌의 <b>프로필 컨셉</b>을 골라주세요!
      </p>
      <div className="flex w-full flex-row items-center justify-center gap-10">
        <div className="grid w-full grid-cols-2 justify-center gap-5">
          <div className="justify-center">
            <button
              className="w-full cursor-pointer"
              onClick={() => handleBoxClick('female')}
              type="button"
              aria-label="female"
              style={{
                boxSizing: 'border-box',
                border:
                  selectedBox === gender.female
                    ? '4px solid #133365'
                    : '4px solid transparent',
              }}
            >
              <div className="h-48 w-full bg-white" />
            </button>
            <p className="mt-4 text-center">여자</p>
          </div>
          <div className="justify-center">
            <button
              className="w-full cursor-pointer"
              onClick={() => handleBoxClick('male')}
              type="button"
              aria-label="male"
              style={{
                boxSizing: 'border-box',
                border:
                  selectedBox === gender.male
                    ? '4px solid #133365'
                    : '4px solid transparent',
              }}
            >
              <div className="h-48 w-full bg-white" />
            </button>
            <p className="mt-4 text-center">남자</p>
          </div>
        </div>
      </div>
      <MyButton
        name="다 음"
        target="/guide"
        enabled={selectedBox !== gender.none}
      />

      <div className="absolute right-0 top-0 h-40 w-40">
        <Image
          src="/corner-puang.png"
          alt="이미지 설명"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
