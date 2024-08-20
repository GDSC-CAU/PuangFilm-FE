'use client';

import { useRouter } from 'next/navigation';

interface MyButtonProps {
  name: string;
  target: string;
}

export default function MyButton({ name, target }: MyButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="border-5 mb-12 h-12 w-full rounded-full bg-primary-darkblue text-xl text-white"
      onClick={() => {
        router.push(target);
      }}
    >
      {name}
    </button>
  );
}
