'use client';

import { useSetAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import IconButton from '@/app/login/_components/IconButton';
import LoginButton from '@/app/login/_components/LoginButton';
import { LOGIN_ERROR_CHECK_MSG, LOGIN_ERROR_MSG } from '@/constants';
import { ICON_TYPES, ROUTE_TYPES } from '@/interfaces';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';
import { actionInsertToken } from '@/store/atoms/tokenActions';
import SVGImages from '@/styles/icons/images.svg';
import SVGNext from '@/styles/icons/next.svg';
import login_character from '../../../public/login-puang.png';

function LoginView() {
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setErrorCheckMessage = useSetAtom(errorCheckMessageAtom);
  const setInsertToken = useSetAtom(actionInsertToken);

  const router = useRouter();
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
            if (reissueResponse.ok) {
              const reissueData = await reissueResponse.json();
              setInsertToken(reissueData.accessToken);
            } else {
              setInsertToken('');
              setErrorMessage(LOGIN_ERROR_MSG);
              setErrorCheckMessage(LOGIN_ERROR_CHECK_MSG);
              router.push(ROUTE_TYPES.ERROR);
            }
          }
        })
        .catch(() => {
          setInsertToken('');
          setErrorMessage(LOGIN_ERROR_MSG);
          setErrorCheckMessage(LOGIN_ERROR_CHECK_MSG);
          router.push(ROUTE_TYPES.ERROR);
        });
    } else {
      setInsertToken(storedToken);
    }
  }, [
    router,
    storedToken,
    setInsertToken,
    setErrorMessage,
    setErrorCheckMessage,
  ]);

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
                  target={ROUTE_TYPES.LIST}
                  name="프로필 목록"
                  iconType={ICON_TYPES.IMAGES}
                  iconComponent={<SVGImages />}
                />
              </div>
              <div className="w-[48%]">
                <IconButton
                  target={ROUTE_TYPES.CONCEPT}
                  name="프로필 생성"
                  iconType={ICON_TYPES.NEXT}
                  iconComponent={<SVGNext />}
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
