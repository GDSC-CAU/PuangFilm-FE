'use client';

import { useSetAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { actionInsertToken } from '@/store/atoms/tokenActions';

export default function LoginCodePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
          router.push('/login');
        });
    }
  }, [setInsertToken, searchParams, router]);

  return <div>로그인 처리중..</div>;
}
