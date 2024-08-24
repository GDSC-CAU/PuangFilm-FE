import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '@/styles/images/Kakao-Login.png';

export default function LoginButton() {
  return (
    <Link href="/concept">
      <Image
        src={LoginImage}
        alt="kakao login"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Link>
  );
}
