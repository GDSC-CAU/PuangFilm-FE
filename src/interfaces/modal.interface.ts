import { ReactNode } from 'react';

export interface ModalMainProps {
  children?: ReactNode;
  isOpen: boolean;
  confirmLabel: string;
  cancelLabel: string;
  comfirmFn: () => void;
  cancelFn: () => void;
  modalLocation: string;
}
export interface ModalTitleProps {
  children: ReactNode;
}

export interface ModalContentProps {
  children?: ReactNode;
}

export interface ModalButtonProps {
  comfirmLabel: string;
  cancelBLabel: string;
  comfirmFn: () => void;
  cancelFn: () => void;
}
