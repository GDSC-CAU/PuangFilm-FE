'use client';

import PreviousPage from '@/components/PreviousPage';
import EmptyList from './_components/EmptyList';
import ImageList from './_components/ImageList';

export default function ListView() {
  const list = [
    'wowowow',
    'wowowowowo',
    'wowowowowowowo',
    'wowowow',
    'wowowowowo',
    'wowowowowowowo',
    'wowowow',
    'wowowowowo',
    'wowowowowowowo',
  ];

  return (
    <div className="flex w-full flex-col justify-start bg-background">
      <PreviousPage target="/login" />
      <p className="mb-3 text-center font-cafe24 text-xl text-primary-darkblue">
        나의 프로필 목록
      </p>
      {list.length === 0 ? <EmptyList /> : <ImageList list={list} />}
    </div>
  );
}
