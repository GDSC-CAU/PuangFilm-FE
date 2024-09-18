export const ICON_TYPES = {
  IMAGES: 'images',
  NEXT: 'next',
} as const;
export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];
