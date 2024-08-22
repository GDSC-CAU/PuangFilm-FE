import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link
      href="/concept"
      className="flex h-12 w-full items-center justify-center rounded-b bg-yellow-400 text-xl text-black"
    >
      카카오로 로그인 하기
    </Link>
  );
}
