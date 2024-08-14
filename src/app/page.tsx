import Image from 'next/image';
import MyButton from '@/components/MyButton';

export default function LoginView() {
  return (
    <div className="flex h-640 w-360 flex-col items-center justify-evenly bg-background">
      기본 글꼴은 cafe24 this is test
      <div className="font-sfpro">이 글꼴은 sfpro</div>
      <div className="font-sfpro text-2xl font-bold">sfpro 글꼴 weight</div>
      <div className="text-blue-700">글꼴 색</div>
      <div>This is Login Page</div>
      <MyButton target="/concept" name="카카오로 로그인하기" />
      <MyButton target="/list" name="이미 로그인 한 경우" />
      <Image
        src="/login_page_img.png"
        alt="puang login"
        width="100"
        height="100"
      />
    </div>
  );
}
