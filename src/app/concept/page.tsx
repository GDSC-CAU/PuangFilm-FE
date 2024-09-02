'use client';

import { useAtomValue } from 'jotai';
import MyButton from '@/components/NextButton';
import { tokenAtom } from '@/store/atoms/tokenAtom';

export default function SelectConceptView() {
  const token = useAtomValue(tokenAtom);
  console.log(token);

  return (
    <div>
      <h1>This is Concept Page</h1>
      <MyButton name="다음" target="/guide" />
    </div>
  );
}
