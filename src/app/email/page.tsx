'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import { ROUTE_TYPES } from '@/interfaces';

export default function EmailEnterView() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const router = useRouter();

  const handleEmailEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(emailValue));
  };

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValid) {
      router.push(ROUTE_TYPES.WAITING);
    }
  };

  return (
    <div className="w-full">
      <PreviousPage target="/upload" />
      <div className="mb-8 text-center text-xl">
        프로필을 생성하는데 <br />
        다소 시간이 걸릴 수 있어요!
      </div>

      <form
        onSubmit={handleEmailSubmit}
        className="flex w-full flex-col items-center gap-y-12"
      >
        <input
          placeholder="이메일을 입력해주세요"
          className="h-12 w-full rounded-full border-2 border-primary-darkblue bg-background text-center font-sfpro text-xs font-bold placeholder-primary-darkblue placeholder-opacity-20"
          type="email"
          required
          value={email}
          onChange={handleEmailEntered}
        />

        <Image
          src="/unlocked-profile.png"
          alt="Sample Image"
          width={205}
          height={205}
          priority
        />

        <div className="text-center font-sfpro text-2xs text-white">
          <span className="font-bold">
            이메일을 입력하면 완료 알림을 보내드립니다. <br />
          </span>
          페이지를 종료하고 다른 일을 해도 괜찮아요!
        </div>

        <button
          type="submit"
          className={`h-12 w-full rounded-full text-center text-xl ${
            isEmailValid
              ? 'bg-primary-darkblue text-white'
              : 'bg-primary-gray text-primary-darkgray'
          }`}
          disabled={!isEmailValid}
        >
          확인
        </button>
      </form>
    </div>
  );
}
