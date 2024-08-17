import Image from 'next/image';
import Link from 'next/link';
import MyButton from '@/components/MyButton';
import SVGPrevious from '@/styles/icons/previous.svg';
import profile from '../../../public/profile.png';

interface GuideProps {
  title: string;
  children: React.ReactNode;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

interface ImageWithDescriptionProps {
  description: string;
}
function ImageWithDescription({ description }: ImageWithDescriptionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[10rem] w-[10rem] bg-white" />
      <div className="font-primary-darkblue pt-2 font-sfpro text-xs font-extrabold">
        {description}
      </div>
    </div>
  );
}

function Guide({
  title,
  children,
  description1,
  description2,
  description3,
  description4,
}: GuideProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center pt-8">
        <Image
          src={profile}
          alt="Sample Image"
          width={72} // 이미지 너비
          height={72} // 이미지 높이
        />
        <div className="pl-4">
          <div className="text-xl">{title}</div>
          <div className="font-sfpro text-sm text-white">{children}</div>
        </div>
      </div>

      <div className="flex grid grid-cols-2 justify-center gap-x-4 gap-y-4 pt-4">
        <ImageWithDescription description={description1} />
        <ImageWithDescription description={description2} />
        <ImageWithDescription description={description3} />
        <ImageWithDescription description={description4} />
      </div>
    </div>
  );
}
export default function GuideView() {
  return (
    <div>
      <div className="py-8">
        <Link href="/concept">
          <SVGPrevious />
        </Link>
      </div>
      <div className="text-xl">
        <div>자연스러운 AI프로필을 위해</div>
        <div>
          <span className="bg-white">적합한 사진들</span>로만 제출해주세요!
        </div>
      </div>

      <div>
        <Guide
          title="이런 사진 좋아요 😀"
          description1="정면에서 찍은"
          description2="얼굴 위주 사진"
          description3="배경이 단색인"
          description4="가까운 거리에서 찍은 사진"
        >
          모든 사진은 <span className="font-bold">고화질</span>일수록 좋아요!
        </Guide>
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

        <Guide
          title="이런 사진은 피해주세요 😵"
          description1="얼굴 일부를 가린"
          description2="전신 사진"
          description3="단체 사진 크롭"
          description4="노출이 심한 사진"
        >
          <span className="font-bold">흑백 사진</span>은 어렵습니다. (흑흑)
        </Guide>
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

      <MyButton name="사진 등록하러 가기" target="/upload" />
    </div>
  );
}
