import Link from 'next/link';
import { ICON_TYPES, IconButtonProps, IconProps, IconType } from '@/interfaces';
import SVGImages from '@/styles/icons/images.svg';
import SVGNext from '@/styles/icons/next.svg';

const icons: Record<IconType, IconProps> = {
  [ICON_TYPES.NEXT]: {
    component: <SVGNext />,
    bgColor: 'bg-primary-darkblue',
  },
  [ICON_TYPES.IMAGES]: {
    component: <SVGImages />,
    bgColor: 'bg-primary-comet',
  },
};

export default function IconButton({
  name,
  target,
  iconType,
}: IconButtonProps) {
  return (
    <Link
      href={target}
      className={`flex h-12 w-full items-center justify-evenly rounded-full text-xl ${iconType && icons[iconType].bgColor} text-white`}
    >
      {iconType && iconType === ICON_TYPES.IMAGES && icons[iconType].component}
      {name}
      {iconType && iconType === ICON_TYPES.NEXT && icons[iconType].component}
    </Link>
  );
}
