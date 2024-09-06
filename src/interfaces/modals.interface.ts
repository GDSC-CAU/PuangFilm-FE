export interface ModalProps {
  onClose: () => void;
  title: string;
  description: React.ReactNode;
  showPolicy: boolean;
  target: string;
  button1: string;
  button2: string;
}
