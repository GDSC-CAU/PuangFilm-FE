import MyButton from '@/components/MyButton';
import SVGPrevious from '@/styles/icons/previous.svg';

export default function GuideView() {
  return (
    <div>
      <div className="absolute left-5 top-5">
        <SVGPrevious />
      </div>

      <h1>This is guide Page</h1>

      <MyButton name="사진 등록하러가기" target="/upload" />
    </div>
  );
}
