'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import { useEffect } from 'react';
import { GENERATION_ERROR_MSG } from '@/app/constants/errorMessages';
import PreviousPage from '@/components/PreviousPage';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';

export default function ErrorPage() {
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);
  const [errorCheckMessage, setErrorCheckMessage] = useAtom(
    errorCheckMessageAtom,
  );

  useEffect(() => {
    return () => {
      setErrorMessage('');
      setErrorCheckMessage('');
    };
  }, [setErrorMessage, setErrorCheckMessage]);

  return (
    <div className="flex h-640 w-360 flex-col justify-start">
      <div className="ml-4 mt-7">
        <PreviousPage
          target={errorMessage === GENERATION_ERROR_MSG ? '/guide' : '/login'}
        />
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <span className="text-4xl">Error</span>
        <span className="mt-6 font-sfpro">{errorMessage}</span>
        <span className="bg-primary-darkblue px-3 font-sfpro font-bold text-white">
          {errorCheckMessage}
        </span>
        <Image
          src="/error-puang.png"
          alt="error puang image"
          width="250"
          height="250"
          className="mt-16"
        />
      </div>
    </div>
  );
}
