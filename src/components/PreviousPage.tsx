import Link from 'next/link';
import { PreviousPageProps } from '@/interfaces';
import SVGPrevious from '@/styles/icons/previous.svg';

export default function PreviousPage({ target }: PreviousPageProps) {
  return (
    <Link href={target}>
      <SVGPrevious />
    </Link>
  );
}
