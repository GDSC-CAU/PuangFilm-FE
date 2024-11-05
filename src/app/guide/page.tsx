'use client';

import { useRouter } from 'next/navigation';
import { CompoundModal } from '@/components/Modal/ModalMain';
import PolicyBottomSheet from '@/components/PolicyBottomSheet/PolicyBottonSheet';
import PreviousPage from '@/components/PreviousPage';
import {
  badexamples,
  goodexamples,
  PRIVACY_POLICY_CONTENT,
  PRIVACY_POLICY_TITLE,
} from '@/constants';
import { ROUTE_TYPES } from '@/interfaces';
import useModal from '../hooks/useModal';
import GuideDetail from './_components/GuideDetail';

export default function GuideView() {
  const router = useRouter();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleMovePage = () => {
    router.push(ROUTE_TYPES.UPLOAD);
  };
  return (
    <div className="flex w-full flex-col justify-start bg-background">
      <PreviousPage target={ROUTE_TYPES.CONCEPT} />
      <div className="pt-6 text-xl">
        <div>자연스러운 AI프로필을 위해</div>
        <div>
          <span className="bg-white">적합한 사진들</span>로만 제출해주세요!
        </div>
      </div>

      <div>
        <GuideDetail
          puang="/happy-puang.png"
          title="이런 사진 좋아요 😀"
          examples={goodexamples}
          explanation={
            <>
              <div>
                이외에도{' '}
                <span className="font-bold">
                  비슷한 각도에서 찍은 사진이나{' '}
                </span>
                이나
              </div>
              <div>
                선명하고{' '}
                <span className="font-bold">
                  아무것도 가려지지 않은 얼굴 사진
                </span>
                이 좋아요!
              </div>
            </>
          }
        >
          모든 사진은 <span className="font-bold">고화질</span>일수록 좋아요!
        </GuideDetail>

        <GuideDetail
          puang="/sad-puang.png"
          title="이런 사진은 피해주세요 😵"
          examples={badexamples}
          explanation={
            <>
              <div>
                이외에도{' '}
                <span className="font-bold">복잡한 배경에서 촬영한 사진</span>
                이나
              </div>
              <div>
                <span className="font-bold">아동 사진</span>은 힘들어요!😭
              </div>
            </>
          }
        >
          <span className="font-bold">흑백 사진</span>은 어렵습니다. (흑흑)
        </GuideDetail>
      </div>

      <div className="pb-4 pt-8">
        <PolicyBottomSheet />
      </div>

      {isOpen ? (
        <CompoundModal
          isOpen={isOpen}
          confirmLabel="동의"
          cancelLabel="동의 안함"
          comfirmFn={handleMovePage}
          cancelFn={handleCloseModal}
          modalLocation="items-end"
        >
          <CompoundModal.Title>{PRIVACY_POLICY_TITLE}</CompoundModal.Title>
          <CompoundModal.PrivatePolicy />
          <CompoundModal.Content>
            {PRIVACY_POLICY_CONTENT}
          </CompoundModal.Content>
        </CompoundModal>
      ) : (
        <button
          type="button"
          className="h-12 w-full rounded-full bg-primary-darkblue text-xl text-white"
          onClick={handleOpenModal}
        >
          사진 등록하러 가기
        </button>
      )}
    </div>
  );
}
