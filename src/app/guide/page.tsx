'use client';

import Modal from '@/components/Modal';
import PreviousPage from '@/components/PreviousPage';
import useModal from '../hooks/useModal';
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
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div className="flex w-full flex-col justify-start">
      <PreviousPage target="/concept" />
      <div className="text-xl">
        <div>자연스러운 AI프로필을 위해</div>
        <div>
          <span className="bg-white">적합한 사진들</span>로만 제출해주세요!
        </div>
      </div>

      <div>
        <GuideDetail title="이런 사진 좋아요 😀" examples={goodexamples}>
          모든 사진은 <span className="font-bold">고화질</span>일수록 좋아요!
        </GuideDetail>
        <div className="flex flex-col gap-1 py-4 font-sfpro text-xs text-white">
          <div>
            이외에도{' '}
            <span className="font-bold">비슷한 각도에서 찍은 사진</span>
            이나
          </div>
          <div>
            선명하고{' '}
            <span className="font-bold">아무것도 가려지지 않은 얼굴 사진</span>
            이 좋아요!
          </div>
        </div>

        <GuideDetail title="이런 사진은 피해주세요 😵" examples={badexamples}>
          <span className="font-bold">흑백 사진</span>은 어렵습니다. (흑흑)
        </GuideDetail>
        <div className="flex flex-col gap-1 py-4 font-sfpro text-xs text-white">
          <div>
            이외에도{' '}
            <span className="font-bold">복잡한 배경에서 촬영한 사진</span>
            이나
          </div>
          <div>
            <span className="font-bold">아동 사진</span>은 힘들어요!😭
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <span className="font-primary-lightblue mb-5 inline-block border-b-2 border-[#5F9FC0] pt-12 font-sfpro text-xs font-bold opacity-20">
          개인정보 수집 및 이용 정책 {'>'}
        </span>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-[420px] px-6">
            <Modal
              onClose={handleCloseModal}
              title="개인정보 수집 및 이용 동의"
              description={
                <>
                  푸앙이 사진관은 개인 정보 처리 방침에 따라
                  <br />
                  개인 정보를 처리하고 있습니다. 원활한 서비스
                  <br />
                  이용을 위해 위 내용에 동의해주세요
                </>
              }
              showPolicy
              target="/upload"
              button1="동의"
              button2="동의 안함"
            />
          </div>
        </div>
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
