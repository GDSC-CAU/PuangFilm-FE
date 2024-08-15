import MyButton from '@/components/MyButton';
import SVGPrevious from '@/styles/icons/previous.svg';

interface InfoTitleProps {
  title: string;
  children: React.ReactNode;
}
function InfoTitle({ title, children }: InfoTitleProps) {
  return (
    <div className="flex flex-row items-center pt-8">
      <div className="h-[4.5rem] w-[4.5rem] rounded-full bg-white" />
      <div className="pl-5">
        <div className="text-xl">{title}</div>
        <div className="font-sfpro text-sm text-white">{children}</div>
      </div>
    </div>
  );
}
export default function GuideView() {
  return (
    <div>
      <div className="absolute left-5 top-5">
        <SVGPrevious />
      </div>
      <div className="text-xl">
        <div>자연스러운 AI프로필을 위해</div>
        <div>
          <span className="bg-white">적합한 사진들</span>로만 제출해주세요!
        </div>
      </div>

      <div>
        <InfoTitle title="이런 사진 좋아요">
          모든 사진은 <span className="font-bold">고화질</span>일수록 좋아요!
        </InfoTitle>

        <InfoTitle title="이런 사진은 피해주세요">
          <span className="font-bold">흑백 사진</span>은 어렵습니다. (흑흑)
        </InfoTitle>
      </div>

      <h1>This is guide Page</h1>
      <MyButton name="사진 등록하러가기" target="/upload" />
    </div>
  );
}
