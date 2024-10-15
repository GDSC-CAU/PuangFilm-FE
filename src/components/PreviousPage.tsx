import Link from 'next/link';
import { PreviousPageProps } from '@/interfaces';
import SVGPrevious from '@/styles/icons/previous.svg';

export default function PreviousPage({ target, onClick }: PreviousPageProps) {
  return (
    <Link href={target} onClick={onClick}>
      <SVGPrevious />
    </Link>
  );
}
