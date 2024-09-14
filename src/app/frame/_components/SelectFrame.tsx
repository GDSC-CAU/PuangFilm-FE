import Image from 'next/image';
import { FrameProps } from '@/interfaces';

export default function SelectFrame({
  circle,
  description,
  onClick,
}: FrameProps) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      <Image
        src={circle}
        alt={description}
        width={40}
        height={40}
        priority
        className="relative"
      />
    </button>
  );
}
