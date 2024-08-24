'use client';

import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '@/styles/images/Kakao-Login.png';

export default function LoginButton() {
  // TODO - handle cors policy
  const URL =
    `https://kauth.kakao.com/oauth/authorize` +
    `?client_id=${process.env.LOGIN_API_KEY}&` +
    `redirect_uri=${process.env.LOGIN_REDIRECT_URL}&response_type=code&scope=openid`;
  const loginProcess = async () => {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error();
    }
    console.dir(res.json());
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
