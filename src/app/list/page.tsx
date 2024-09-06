'use client';

import { useAtomValue } from 'jotai';
import MyButton from '@/components/MyButton';
import { tokenAtom } from '@/store/atoms/tokenAtom';

export default function ListView() {
  const token = useAtomValue(tokenAtom);
  console.log(token);

  return (
    <div>
      <h1>프로필 list Page</h1>
      <MyButton name="프로필 생성" target="/frame" />
    </div>
  );
}
