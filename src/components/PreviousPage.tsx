import Link from 'next/link';
import SVGPrevious from '@/styles/icons/previous.svg';

interface PrevioiusPageProps {
  target: string;
}

export default function PreviousPage({ target }: PrevioiusPageProps) {
  return (
    <div className="py-8">
      <Link href={target}>
        <SVGPrevious />
      </Link>
    </div>
  );
}
