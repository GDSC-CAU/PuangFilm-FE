'use client';

import Image from 'next/image';
import LoginImage from '@/styles/images/Kakao-Login.png';

export default function LoginButton() {
  const redirectLoginPage = () => {
    window.location.href =
      `https://kauth.kakao.com/oauth/authorize` +
      `?client_id=${process.env.NEXT_PUBLIC_LOGIN_API_KEY}&` +
      `redirect_uri=${process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL}&response_type=code&scope=openid`;
  };

  return (
    <button className="h-full w-full" type="button" onClick={redirectLoginPage}>
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
  );
}
