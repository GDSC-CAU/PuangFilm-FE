'use client';

import { useSetAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import LoginButton from '@/app/login/_components/LoginButton';
import IconButton from '@/components/IconButton';
import { ICON_TYPES } from '@/interfaces';
import { actionInsertToken } from '@/store/atoms/tokenActions';
import login_character from '../../../public/login-puang.png';

/* 기본 글꼴은 cafe24 this is test */
/* <div className="font-sfpro">이 글꼴은 sfpro</div> */
/* <div className="font-sfpro text-2xl font-bold">sfpro 글꼴 weight</div> */
/* <div className="text-blue-700">글꼴 색</div> */
/* <div>This is Login Page</div> */

function LoginView() {
  const setInsertToken = useSetAtom(actionInsertToken);
  const storedToken = window.sessionStorage.getItem('accessToken') || '';
  useEffect(() => {
    if (storedToken !== '') {
      fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/validate?code=${storedToken}`,
      )
        .then((response) => response.json())
        .then(async (data) => {
          if (data.loginSuccess === false) {
            const reissueResponse = await fetch(
              `${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/reissue?code=${storedToken}`,
            );
            // TODO- ok가 아닌경우, ok이지만 accessToken이 없는 경우 fail page로 이동 필요
            if (reissueResponse.ok) {
              const reissueData = await reissueResponse.json();
              setInsertToken(reissueData.accessToken);
            } else {
              setInsertToken('');
            }
          }
        })
        .catch(() => {
          setInsertToken('');
        });
    } else {
      setInsertToken(storedToken);
    }
  }, [storedToken, setInsertToken]);

  return (
    <div className="flex h-640 w-360 flex-col items-center justify-between bg-background">
      <div className="ml-10 flex w-full flex-grow flex-col items-start justify-center">
        <span className="mb-2 text-2xl text-theme-font">
          어서오세요!
          <br />
          푸앙이 사진관입니다 :)
        </span>
        <span className="mb-2 font-sfpro font-bold text-white">
          AI 프로필을 찍는 푸앙이의 특별한 사진관!
        </span>
        <span className="font-sfpro text-white">
          당신의 자연스러운 모습을
          <br />
          푸앙이 프레임에 함께 담아가세요
        </span>
      </div>
      <div className="relative w-full">
        <Image
          src={login_character}
          alt="puang login"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div className="absolute bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 justify-between">
          {storedToken === '' ? (
            <LoginButton />
          ) : (
            <>
              <div className="w-[48%]">
                <IconButton
                  target="/list"
                  name="프로필 목록"
                  iconType={ICON_TYPES.IMAGES}
                />
              </div>
              <div className="w-[48%]">
                <IconButton
                  target="/concept"
                  name="프로필 생성"
                  iconType={ICON_TYPES.NEXT}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(LoginView), {
  ssr: false,
});
