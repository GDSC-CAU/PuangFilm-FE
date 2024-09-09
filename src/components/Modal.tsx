import { useEffect } from 'react';
import MyButton from '@/components/MyButton';
import { ModalProps } from '@/interfaces';

export default function Modal({
  onClose,
  title,
  description,
  showPolicy,
  target,
  button1,
  button2,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex h-[17rem] w-full flex-col items-center justify-evenly gap-y-4 rounded-[20px] bg-white px-6 pt-6">
      <div className="text-xl">{title}</div>
      {showPolicy && (
        <div className="flex justify-center">
          <span className="font-primary-lightblue inline-block border-b-2 border-[#5F9FC0] font-sfpro text-2xs font-bold opacity-20">
            개인정보 수집 및 이용 정책 {'>'}
          </span>
        </div>
      )}
      <div className="text-center font-sfpro text-3xs font-bold">
        {description}
      </div>

      <div className="flex w-full flex-col">
        <MyButton target={target} name={button1} enabled />
        <button
          type="button"
          onClick={onClose}
          className="h-12 w-full rounded-full bg-white text-xl text-primary-gray"
        >
          {button2}
        </button>
      </div>
    </div>
  );
}
