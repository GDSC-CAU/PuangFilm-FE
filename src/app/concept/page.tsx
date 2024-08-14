import MyButton from '@/components/MyButton';

export default function SelectConceptView() {
  return (
    <div className="mx-10 flex w-full flex-col gap-10">
      <p className="text-#133365 text-start font-cafe24 text-xl">
        어떤 컨셉의 <br />
        프로필을 만들어볼까요?
      </p>
      <p className="text-center font-sfpro text-sm text-white">
        원하는 느낌의 <b>프로필 컨셉</b>을 골라주세요!
      </p>
      <div className="flex w-full flex-row items-center justify-center gap-10">
        <div className="gap-10">
          {/* add image */}
          <p>여자</p>
        </div>
        <div className="">
          {/* add image */}
          <p>남자</p>
        </div>
      </div>
      <MyButton name="다음" target="/guide" />
    </div>
  );
}
