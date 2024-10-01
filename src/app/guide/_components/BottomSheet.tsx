import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-primary-lightblue mb-5 inline-block border-b-2 border-[#5F9FC0] pt-12 font-sfpro text-2xs font-bold opacity-20"
      >
        개인정보 수집 및 이용 정책 {'>'}
      </button>

      <BottomSheet
        open={open}
        snapPoints={({ maxHeight }) => [maxHeight * 0.8, maxHeight]}
      >
        <div>My awesome content here</div>
        <button type="button" onClick={() => setOpen(false)}>
          close
        </button>
      </BottomSheet>
    </div>
  );
}
