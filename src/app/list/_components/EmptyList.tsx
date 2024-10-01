import Image from 'next/image';
import IconButton from '@/app/login/_components/IconButton';
import { ICON_TYPES, ROUTE_TYPES } from '@/interfaces';
import SVGNext from '@/styles/icons/next.svg';

export default function EmptyList() {
  return (
    <div className="mx-auto max-w-md text-center">
      <p className="mb-10 text-center font-sfpro text-sm text-primary-darkblue">
        아직 생성된 프로필이 없어요. <br />
        프로필을 먼저 만들어 주세요!
      </p>
      <Image
        className="mb-10"
        src="/curious-puang.png"
        alt="어리둥절한 푸앙이"
        width={270}
        height={300}
      />
      <IconButton
        name="프로필 생성"
        target={ROUTE_TYPES.CONCEPT}
        iconComponent={<SVGNext />}
        iconType={ICON_TYPES.NEXT}
      />
    </div>
  );
}
