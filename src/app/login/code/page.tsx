'use client';

import { useSetAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';
import { actionInsertToken } from '@/store/atoms/tokenActions';
import {
  LOGIN_ERROR_CHECK_MSG,
  LOGIN_ERROR_MSG,
} from '@/store/constants/errorMessages';

export default function LoginCodePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setErrorCheckMessage = useSetAtom(errorCheckMessageAtom);
  const setInsertToken = useSetAtom(actionInsertToken);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/login?code=${code}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setInsertToken(data.accessToken);
          router.push('/concept');
        })
        .catch(() => {
          setErrorMessage(LOGIN_ERROR_MSG);
          setErrorCheckMessage(LOGIN_ERROR_CHECK_MSG);
          router.push('/error');
        });
    }
  }, [setInsertToken, searchParams, router]);

  return <div>로그인 처리중..</div>;
}
