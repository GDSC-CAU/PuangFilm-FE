import { atom } from 'jotai';
import { tokenAtom } from '@/store/atoms/tokenAtom';

export const actionInsertToken = atom(
  (get) => get(tokenAtom),
  (_, set, token: string) => {
    set(tokenAtom, token);
    window.localStorage.setItem('accessToken', token);
  },
);

export const actionDeleteToken = atom(
  (get) => get(tokenAtom),
  (_, set) => {
    set(tokenAtom, '');
    window.localStorage.removeItem('accessToken');
  },
);
