import Image from 'next/image';
import MyButton from '@/components/MyButton';
import login_character from '../../public/login_page_img.png';

export default function LoginView() {
  return (
    <div className="flex h-640 w-360 flex-col items-center justify-evenly bg-background">
      <div className="text-2xl text-theme-font">
        어서오세요!
        <br />
        푸앙이 사진관입니다 :)
      </div>
      <div className="font-sfpro font-bold text-white">
        AI 프로필을 찍는 푸앙이의 특별한 사진관!
      </div>
      <div className="font-sfpro text-white">
        당신의 자연스러운 모습을
        <br />
        푸앙이 프레임에 함께 담아가세요
      </div>
      {/* <MyButton target="/list" name="이미 로그인 한 경우" /> */}
      <Image
        src={login_character}
        alt="puang login"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <MyButton
        target="/concept"
        name="카카오로 로그인하기"
        className="bg-background"
      />
    </div>
  );
}
