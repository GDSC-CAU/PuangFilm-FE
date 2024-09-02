import Link from 'next/link';

interface MyButtonProps {
  name: string;
  target: string;
  enabled: boolean;
}

export default function MyButton({
  name,
  target,
  enabled = true,
}: MyButtonProps) {
  return (
    <Link
      href={enabled ? target : '#'}
      className={`flex h-12 w-full items-center justify-center rounded-full text-xl ${enabled ? 'bg-primary-darkblue text-white' : 'text-primary-darkgray cursor-not-allowed bg-primary-gray'}`}
    >
      {name}
    </Link>
  );
}
