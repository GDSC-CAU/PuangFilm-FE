import { useEffect } from 'react';
import MyButton from '@/components/MyButton';

interface ModalProps {
  onClose: () => void;
}
export default function Modal({ onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex h-[17rem] w-full flex-col items-center justify-center rounded-[20px] bg-white px-6 pt-6">
      <div className="text-xl">개인정보 수집 및 이용 동의</div>
      <div className="mb-4 flex justify-center pt-4">
        <span className="font-primary-lightblue inline-block border-b-2 border-[#5F9FC0] font-sfpro text-xs font-bold opacity-20">
          개인정보 수집 및 이용 정책 {'>'}
        </span>
      </div>
      <div className="mb-4 text-center font-sfpro text-xs font-bold">
        푸앙이 사진관은 개인 정보 처리 방침에 따라
        <br />
        개인 정보를 처리하고 있습니다. 원활한 서비스
        <br />
        이용을 위해 위 내용에 동의해주세요
      </div>

      <div className="flex w-full flex-col">
        <MyButton target="/upload" name="동의" />
        <button
          type="button"
          onClick={onClose}
          className="h-12 w-full rounded-full bg-white text-xl text-primary-gray"
        >
          동의 안함
        </button>
      </div>
    </div>
  );
}
