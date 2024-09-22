import { createPortal } from 'react-dom';
import { ModalMainProps } from '@/interfaces';
import {
  ModalButton,
  ModalContent,
  ModalPrivacyPolicy,
  ModalTitle,
} from './ModalSubComponents';

function ModalMain({
  children,
  isOpen,
  confirmLabel,
  cancelLabel,
  comfirmFn,
  cancelFn,
  modalLocation,
}: ModalMainProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 flex ${modalLocation} justify-center bg-black bg-opacity-50`}
    >
      <div className="w-full max-w-[420px] px-6">
        <div className="flex w-full flex-col items-center justify-evenly gap-y-4 rounded-[20px] bg-white px-6 pt-6">
          {children}
          <ModalButton
            comfirmLabel={confirmLabel}
            cancelBLabel={cancelLabel}
            comfirmFn={comfirmFn}
            cancelFn={cancelFn}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
export const CompoundModal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Content: ModalContent,
  PrivatePolicy: ModalPrivacyPolicy,
});
