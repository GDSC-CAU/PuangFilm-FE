'use client';

import { useEffect, useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import EmptyList from './_components/EmptyList';
import ImageList from './_components/ImageList';

export default function ListView() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

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
          } else {
            console.error(data.msg);
          }
        })
        .catch(() => {
          console.error('Error fetching data:');
        })
        .finally(() => setLoading(false));
    }
  }, [storedToken]);

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
