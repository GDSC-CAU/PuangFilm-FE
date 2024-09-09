import { atom } from 'jotai/index';

export const gender = {
  male: 'male',
  female: 'female',
  none: 'none',
} as const;

export type GenderStateUnion = (typeof gender)[keyof typeof gender];

export const selectedBoxAtom = atom<GenderStateUnion>(gender.none);
