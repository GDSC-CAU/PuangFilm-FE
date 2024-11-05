'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CompoundModal } from '@/components/Modal/ModalMain';
import PreviousPage from '@/components/PreviousPage';
import { ENTER_EMAIL_TITLE } from '@/constants';
import { ROUTE_TYPES } from '@/interfaces';
import useModal from '../hooks/useModal';

export default function EmailEnterView() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
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

  const handleMovePage = () => {
    router.push(ROUTE_TYPES.WAITING);
  };

  return (
    <div className="w-full">
      <PreviousPage target="/upload" />
      <div className="text-center text-xl">
        프로필을 생성하는데 <br />
        다소 시간이 걸릴 수 있어요!
      </div>

      <div className="py-4 text-center font-sfpro text-2xs">
        <span className="font-bold">
          이메일을 입력하면 완료 알림을 보내드립니다. <br />
        </span>
        페이지를 종료하고 다른 일을 해도 괜찮아요!
      </div>

      <form
        onSubmit={handleEmailSubmit}
        className="flex w-full flex-col items-center"
      >
        <input
          placeholder="이메일을 입력해주세요"
          className="mb-12 h-12 w-full rounded-full border-2 border-primary-darkblue bg-background text-center font-sfpro text-xs font-bold placeholder-primary-darkblue placeholder-opacity-20"
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

        <button
          type="button"
          onClick={handleOpenModal}
          className="pb-4 pt-8 font-sfpro text-4xs font-bold text-primary-lightblue underline underline-offset-4"
        >
          건너뛰기 {'>'}
        </button>

        {isOpen && (
          <CompoundModal
            isOpen={isOpen}
            confirmLabel="확인"
            cancelLabel="취소"
            comfirmFn={handleMovePage}
            cancelFn={handleCloseModal}
            modalLocation="items-center"
          >
            <CompoundModal.Title>{ENTER_EMAIL_TITLE}</CompoundModal.Title>
          </CompoundModal>
        )}

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
