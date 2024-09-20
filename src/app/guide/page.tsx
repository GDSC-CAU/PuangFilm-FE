'use client';

import { CompoundModal } from '@/components/Modal/ModalMain';
import PreviousPage from '@/components/PreviousPage';
import { PRIVACY_POLICY_CONTENT, PRIVACY_POLICY_TITLE } from '@/constants';
import { ROUTE_TYPES } from '@/interfaces';
import useModal from '../hooks/useModal';
import { useNavigate } from '../hooks/useNavigate';
import GuideDetail from './_components/GuideDetail';

const goodexamples = [
  { id: '1', src: '/example1.png', description: '정면에서 찍은' },
  { id: '2', src: '/example2.png', description: '얼굴 위주 사진' },
  { id: '3', src: '/example3.png', description: '배경이 단색인' },
  { id: '4', src: '/example4.png', description: '가까운 거리에서 찍은 사진' },
];

const badexamples = [
  { id: '5', src: '/example5.png', description: '얼굴 일부를 가린' },
  { id: '6', src: '/example6.png', description: '전신 사진' },
  { id: '7', src: '/example7.png', description: '단체 사진 크롭' },
  { id: '8', src: '/example8.png', description: '노출이 심한 사진' },
];

export default function GuideView() {
  const { navigateTo } = useNavigate();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleMovePage = () => {
    navigateTo(ROUTE_TYPES.UPLOAD);
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

      <div className="flex justify-center">
        <span className="font-primary-lightblue mb-5 inline-block border-b-2 border-[#5F9FC0] pt-12 font-sfpro text-2xs font-bold opacity-20">
          개인정보 수집 및 이용 정책 {'>'}
        </span>
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
