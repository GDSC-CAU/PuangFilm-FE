import { ReactElement } from 'react';
import { IconType } from '@/interfaces/icon.interface';
import { RouteType } from '@/interfaces/route.interface';

interface ButtonProps {
  name: string;
  target: RouteType;
}

export interface MyButtonProps extends ButtonProps {
  enabled?: boolean;
  icon?: ReactElement;
}

export interface IconButtonProps extends ButtonProps {
  iconType: IconType;
  iconComponent: ReactElement;
}
