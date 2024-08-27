'use client';

import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '@/styles/images/Kakao-Login.png';

export default function LoginButton() {
  // TODO - handle cors policy
  const REDIRECT_URL =
    `https://kauth.kakao.com/oauth/authorize` +
    `?client_id=${process.env.NEXT_PUBLIC_LOGIN_API_KEY}&` +
    `redirect_uri=${process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL}&response_type=code&scope=openid`;
  const loginProcess = async () => {
    window.location.href = REDIRECT_URL;

    const AUTHORIZATION_CODE = new URL(
      document.location.toString(),
    ).searchParams.get('code') as string;

    console.log(AUTHORIZATION_CODE);
  };

  return (
    <Link href="/concept">
      <button className="h-full w-full" type="button" onClick={loginProcess}>
        <Image
          src={LoginImage}
          alt="kakao login"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </button>
    </Link>
  );
}
