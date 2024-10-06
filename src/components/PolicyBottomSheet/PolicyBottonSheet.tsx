import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { PolicyContent } from './PolicyContents';

export default function PolicyBottomSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-primary-lightblue mb-2 inline-block border-b-2 border-[#5F9FC0] font-sfpro text-2xs font-bold opacity-20"
      >
        개인정보 수집 및 이용 정책 {'>'}
      </button>

      <BottomSheet
        open={open}
        snapPoints={({ maxHeight }) => [maxHeight * 0.8, maxHeight]}
      >
        <div className="p-8">
          <div className="pb-4 text-xl">
            푸앙이 사진관 <br />
            개인정보 수집 및 이용 동의
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="fixed bottom-12 flex h-12 w-[85%] items-center justify-center rounded-full bg-primary-darkblue px-8 text-xl text-white shadow-xl shadow-gray-300"
            >
              확인
            </button>
          </div>
          <PolicyContent />
        </div>
      </BottomSheet>
    </div>
  );
}
