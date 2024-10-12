import { atomWithStorage } from 'jotai/utils';

export const selectedPhotoAtomWithStorage = atomWithStorage<string>(
  'selectedPhoto',
  '',
);
