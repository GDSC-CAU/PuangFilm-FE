import Link from 'next/link';

interface MyButtonProps {
  name: string;
  target: string;
}

export default function MyButton({ name, target }: MyButtonProps) {
  return (
    <Link
      href={target}
      className="flex h-12 w-full items-center justify-center rounded-full bg-primary-darkblue text-xl text-white"
    >
      {name}
    </Link>
  );
}
