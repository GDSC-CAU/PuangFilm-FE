import MyButton from '@/components/MyButton';
import PreviousPage from '@/components/PreviousPage';

export default function EmailEnterView() {
  return (
    <div className="w-full">
      <PreviousPage target="/upload" />
      <div className="text-center text-xl">
        프로필을 생성하는데 <br />
        다소 시간이 걸릴 수 있어요!
      </div>

      <MyButton name="확인" target="/waiting" />
    </div>
  );
}
