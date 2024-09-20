'use client';

import Image from 'next/image';

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
        src="/Kakao-Login.png"
        alt="kakao login"
        layout="responsive"
        width={350}
        height={45}
      />
    </button>
  );
}
