import Image from 'next/image';
import MyButton from '@/components/MyButton';
import login_character from '../../public/login_page_img.png';

/* 기본 글꼴은 cafe24 this is test */
/* <div className="font-sfpro">이 글꼴은 sfpro</div> */
/* <div className="font-sfpro text-2xl font-bold">sfpro 글꼴 weight</div> */
/* <div className="text-blue-700">글꼴 색</div> */
/* <div>This is Login Page</div> */

export default function LoginView() {
  return (
    <div className="flex h-640 w-360 flex-col items-center justify-between bg-background">
      <div className="flex w-full flex-grow flex-col items-center justify-center border-2 border-black">
        <span className="text-2xl text-theme-font">
          어서오세요!
          <br />
          푸앙이 사진관입니다 :)
        </span>
        <span className="font-sfpro font-bold text-white">
          AI 프로필을 찍는 푸앙이의 특별한 사진관!
        </span>
        <span className="font-sfpro text-white">
          당신의 자연스러운 모습을
          <br />
          푸앙이 프레임에 함께 담아가세요
        </span>
      </div>
      {/* <MyButton target="/list" name="이미 로그인 한 경우" /> */}
      <div className="relative w-full border-2 border-black">
        <Image
          src={login_character}
          alt="puang login"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        {/* TODO MyButton 이 link component 로 변경 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <MyButton target="/concept" name="카카오로 로그인하기" />
        </div>
      </div>
    </div>
  );
}
