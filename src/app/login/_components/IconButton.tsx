import Link from 'next/link';
import { iconList } from '@/constants';
import { ICON_TYPES, IconButtonProps } from '@/interfaces';

export default function IconButton({
  name,
  target,
  iconType,
  iconComponent,
}: IconButtonProps) {
  return (
    <Link
      href={target}
      className={`flex h-12 w-full items-center justify-evenly rounded-full text-xl ${iconList[iconType].bgColor} text-white`}
    >
      {iconType === ICON_TYPES.IMAGES && iconComponent}
      {name}
      {iconType === ICON_TYPES.NEXT && iconComponent}
    </Link>
  );
}
