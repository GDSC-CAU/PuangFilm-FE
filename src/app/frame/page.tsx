import Link from 'next/link';
import PreviousPage from '@/components/PreviousPage';
import SVGGoToList from '@/styles/icons/gotolist.svg';

export default function FrameSelectView() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <PreviousPage target="/" />
        <Link href="/list" className="pr-4">
          <SVGGoToList />
        </Link>
      </div>
    </div>
  );
}
