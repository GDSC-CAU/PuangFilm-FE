'use client';

import { useAtom } from 'jotai/index';
import Image from 'next/image';
import MyButton from '@/components/MyButton';
import { ROUTE_TYPES } from '@/interfaces';
import { ListWithDataProps } from '@/interfaces/profile-list.interface';
import { selectedPhotoAtom } from '@/store/atoms/selectedPhotoAtom';

export default function ImageList({ list }: ListWithDataProps): JSX.Element {
  const [selectedPhoto, setSelectedPhoto] = useAtom(selectedPhotoAtom);

  const handlePhotoClick = (selectTime: string) => {
    if (selectedPhoto === selectTime) {
      setSelectedPhoto('');
    } else {
      setSelectedPhoto(selectTime);
    }
  };

  return (
    <div>
      <p className="mb-5 text-center font-sfpro text-sm text-white">
        편집할 사진을 선택해서 <br />
        이미지 프레임을 선택해 주세요!
      </p>

      <div className="h-96 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {list.map((item) => (
            <div key={item}>
              <button
                className="w-full cursor-pointer"
                onClick={() => handlePhotoClick(item)}
                type="button"
                aria-label="female"
                style={{
                  boxSizing: 'border-box',
                  border:
                    selectedPhoto === item
                      ? '4px solid #133365'
                      : '4px solid transparent',
                }}
              >
                <Image
                  src="/curious-puang.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </button>
              <p className="text-right font-sfpro text-sm text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <MyButton name="확 인" target={ROUTE_TYPES.FRAME} />
    </div>
  );
}
