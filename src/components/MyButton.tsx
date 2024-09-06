import Link from 'next/link';
import { MyButtonProps } from '@/interfaces';

export default function MyButton({
  name,
  target,
  enabled = true,
}: MyButtonProps) {
  return (
    <Link
      href={target}
      className={`flex h-12 w-full items-center justify-center rounded-full text-xl ${enabled ? 'bg-primary-darkblue text-white' : 'cursor-not-allowed bg-primary-gray text-primary-darkgray'}`}
      style={{ pointerEvents: enabled ? 'auto' : 'none' }}
    >
      {name}
    </Link>
  );
}
