import { atom } from 'jotai';

const getInitialToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('accessToken') || '';
  }
  return '';
};

export const tokenAtom = atom<string>(getInitialToken());

tokenAtom.onMount = (set) => {
  const handleStorageChange = () => {
    set(window.localStorage.getItem('accessToken') || '');
  };
  window.addEventListener('storage', handleStorageChange);
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
};
