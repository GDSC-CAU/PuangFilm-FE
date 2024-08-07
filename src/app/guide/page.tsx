import MyButton from '@/components/MyButton';

export default function GuideView() {
  return (
    <div>
      <h1>This is guide Page</h1>
      <MyButton name="사진 등록하러가기" target="/upload" />
    </div>
  );
}
