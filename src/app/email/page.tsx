'use client';

import { useState } from 'react';
import PreviousPage from '@/components/PreviousPage';

export default function EmailEnterView() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(emailValue));
  };

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValid) {
      console.log('what is your email:', email);
    }
  };
  return (
    <div className="w-full">
      <PreviousPage target="/upload" />
      <div className="text-center text-xl">
        프로필을 생성하는데 <br />
        다소 시간이 걸릴 수 있어요!
      </div>

      <form onSubmit={handleEmailSubmit}>
        <input
          placeholder="이메일을 입력해주세요"
          className="h-12 w-full rounded-full border-2 border-primary-darkblue bg-background text-center font-sfpro text-[1.1rem] font-bold placeholder-primary-darkblue placeholder-opacity-20"
          type="email"
          required
          value={email}
          onChange={handleEmailEntered}
        />
        <button
          type="submit"
          className={`h-12 w-full rounded-full text-center text-xl ${isEmailValid ? 'bg-primary-darkblue text-white' : 'text-primary-darkgray bg-primary-gray'}`}
          disabled={!isEmailValid}
        >
          확인
        </button>
      </form>
    </div>
  );
}
