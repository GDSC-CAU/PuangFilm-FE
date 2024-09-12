'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';
import PreviousPage from '@/components/PreviousPage';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';
import { GENERATION_ERROR_MSG } from '@/store/constants/errorMessages';

export default function ErrorPage() {
  const errorMessage = useAtomValue(errorMessageAtom);
  const errorCheckMessage = useAtomValue(errorCheckMessageAtom);

  return (
    <div className="flex h-640 w-360 flex-col justify-start">
      <div className="ml-4 mt-7">
        <PreviousPage
          target={errorMessage === GENERATION_ERROR_MSG ? '/concept' : '/login'}
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
