import Link from 'next/link';
import SVGPrevious from '@/styles/icons/previous.svg';

interface PrevioiusPageProps {
  target: string;
}

export default function PreviousPage({ target }: PrevioiusPageProps) {
  return (
    <Link href={target} className="pb-4 pt-8">
      <SVGPrevious />
    </Link>
  );
}
