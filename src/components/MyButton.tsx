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
      className="text-primary-foreground border-5 rounded-md border-red-500 bg-yellow-500 px-6 py-3 text-lg font-medium"
      onClick={() => {
        router.push(target);
      }}
    >
      {name}
    </button>
  );
}
