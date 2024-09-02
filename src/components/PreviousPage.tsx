import Link from 'next/link';
import SVGPrevious from '@/styles/icons/previous.svg';

interface PreviousPageProps {
  target: string;
}

export default function PreviousPage({ target }: PreviousPageProps) {
  return (
    <Link href={target}>
      <SVGPrevious />
    </Link>
  );
}
