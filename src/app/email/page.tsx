import MyButton from '@/components/NextButton';

export default function EmailEnterView() {
  return (
    <div>
      <h1>This is Email Enter Page</h1>
      <MyButton name="확인" target="/waiting" />
    </div>
  );
}
