import { ReactNode } from 'react';

interface ModalTitleProps {
  children: ReactNode;
}
export function ModalTitle({ children }: ModalTitleProps) {
  return <div className="text-xl">{children}</div>;
}

interface ModalContentProps {
  children?: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return <div className="text-center font-sfpro text-3xs">{children}</div>;
}
interface ModalButtonProps {
  comfirmLabel: string;
  cancelBLabel: string;
  comfirmFn: () => void;
  cancelFn: () => void;
}
export function ModalButton({
  comfirmLabel,
  cancelBLabel,
  comfirmFn,
  cancelFn,
}: ModalButtonProps) {
  return (
    <div className="flex w-full flex-col">
      <button
        type="button"
        onClick={comfirmFn}
        className="h-12 w-full rounded-full bg-primary-darkblue text-xl text-primary-gray"
      >
        {comfirmLabel}
      </button>
      <button
        type="button"
        onClick={cancelFn}
        className="h-12 w-full rounded-full bg-white text-xl text-primary-gray"
      >
        {cancelBLabel}
      </button>
    </div>
  );
}

//개인정보보호동의 페이지 추가 예정
interface ModalPrivacyPolicyProps {}
export function ModalPrivacyPolicy({}: ModalPrivacyPolicyProps) {
  return (
    <span className="font-primary-lightblue inline-block border-b-2 border-[#5F9FC0] font-sfpro text-2xs font-bold opacity-20">
      개인정보 수집 및 이용 정책 {'>'}
    </span>
  );
}
