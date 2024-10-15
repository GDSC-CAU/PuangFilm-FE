'use client';

import { useSetAtom } from 'jotai/index';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import {
  GENERATION_ERROR_CHECK_MSG,
  IMG_LIST_ERROR_MSG,
  NO_GENERATED_IMAGE_MSG,
} from '@/constants';
import { createdPhotoAtomWithStorage } from '@/store/atoms/atomWithStorage';
import {
  errorCheckMessageAtom,
  errorMessageAtom,
} from '@/store/atoms/errorMessageAtom';
import EmptyList from './_components/EmptyList';
import ImageList from './_components/ImageList';

export function ListView() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setErrorCheckMessage = useSetAtom(errorCheckMessageAtom);
  const setCreatedPhoto = useSetAtom(createdPhotoAtomWithStorage);
  const storedToken = window.sessionStorage.getItem('accessToken') || '';

  useEffect(() => {
    if (storedToken !== '') {
      fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/list?code=${storedToken}`,
      )
        .then((response) => response.json())
        .then(async (data) => {
          if (data.code === 200) {
            setList(data.data);
            if (data.data.length > 0) {
              setCreatedPhoto(data.data[0]);
            }
          } else {
            setErrorMessage(NO_GENERATED_IMAGE_MSG);
            setErrorCheckMessage(GENERATION_ERROR_CHECK_MSG);
          }
        })
        .catch(() => {
          setErrorMessage(IMG_LIST_ERROR_MSG);
          setErrorCheckMessage(GENERATION_ERROR_CHECK_MSG);
        })
        .finally(() => setLoading(false));
    }
  }, [
    setCreatedPhoto,
    setErrorCheckMessage,
    setErrorMessage,
    setList,
    storedToken,
  ]);

  return (
    <div className="flex w-full flex-col justify-start bg-background">
      <PreviousPage target="/login" />
      <p className="mb-3 text-center font-cafe24 text-xl text-primary-darkblue">
        나의 프로필 목록
      </p>
      {list.length === 0 && <EmptyList />}
      {!loading && list.length !== 0 && <ImageList list={list} />}
    </div>
  );
}
export default dynamic(() => Promise.resolve(ListView), {
  ssr: false,
});
