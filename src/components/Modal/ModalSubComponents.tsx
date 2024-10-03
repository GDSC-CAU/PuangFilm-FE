import {
  ModalButtonProps,
  ModalContentProps,
  ModalTitleProps,
} from '@/interfaces';
import PrivacyPolicy from '../PolicyBottomSheet/PolicyBottonSheet';

export function ModalTitle({ children }: ModalTitleProps) {
  return (
    <div className="whitespace-pre-line text-center text-xl">{children}</div>
  );
}

export function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="whitespace-pre-line text-center font-sfpro text-3xs">
      {children}
    </div>
  );
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

export function ModalPrivacyPolicy() {
  return <PrivacyPolicy />;
}
