'use client';

import { useEffect, useState } from 'react';
import PreviousPage from '@/components/PreviousPage';
import EmptyList from './_components/EmptyList';
import ImageList from './_components/ImageList';

export default function ListView() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/photo-request/list');
        const data = await response.json();

        if (data.code === 200) {
          setList(data.data);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then(() => {});
  }, []);

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
