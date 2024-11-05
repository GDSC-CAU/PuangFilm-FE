import { ICON_TYPES, IconProps, IconType } from '@/interfaces';

export const iconList: Record<IconType, IconProps> = {
  [ICON_TYPES.NEXT]: {
    bgColor: 'bg-primary-darkblue',
  },
  [ICON_TYPES.IMAGES]: {
    bgColor: 'bg-primary-comet',
  },
};
