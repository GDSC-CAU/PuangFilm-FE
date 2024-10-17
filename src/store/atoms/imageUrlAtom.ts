import { atomWithStorage, createJSONStorage } from 'jotai/utils';

type Urls = string[];

const storage = createJSONStorage<Urls>(() => sessionStorage);

export const imageUrlsAtom = atomWithStorage<Urls>('image-urls', [], storage);
