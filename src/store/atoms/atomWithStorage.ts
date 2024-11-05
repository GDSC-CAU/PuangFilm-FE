import { atomWithStorage } from 'jotai/utils';

export const selectedPhotoAtomWithStorage = atomWithStorage<string>(
  'selectedPhoto',
  '',
);

export const createdPhotoAtomWithStorage = atomWithStorage<string>(
  'createdPhoto',
  '',
);
