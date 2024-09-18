import { ReactElement } from 'react';
import { IconType } from '@/interfaces/icon.interfaces';

interface ButtonProps {
  name: string;
  target: string;
}

export interface MyButtonProps extends ButtonProps {
  enabled?: boolean;
}

export interface IconButtonProps extends ButtonProps {
  iconType?: IconType;
}

export interface IconProps {
  component: ReactElement;
  bgColor: string;
}
