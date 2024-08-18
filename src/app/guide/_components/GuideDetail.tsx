import Image from 'next/image';
import SVGTriangle from '@/styles/icons/triangle.svg';

interface ImageWithDescriptionProps {
  description: string;
}
function ImageWithDescription({ description }: ImageWithDescriptionProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-12 w-full bg-white" style={{ paddingTop: '100%' }} />
      <div className="font-primary-darkblue flex flex-row items-center gap-1 pt-2 font-sfpro text-xs font-extrabold">
        <SVGTriangle />
        {description}
      </div>
    </div>
  );
}

interface GuideDetailProps {
  title: string;
  children: React.ReactNode;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

export default function GuideDetail({
  title,
  children,
  description1,
  description2,
  description3,
  description4,
}: GuideDetailProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center pt-8">
        <Image src="/profile.png" alt="Sample Image" width={72} height={72} />
        <div className="pl-4">
          <div className="text-xl">{title}</div>
          <div className="font-sfpro text-sm text-white">{children}</div>
        </div>
      </div>

      <div className="flex grid grid-cols-2 justify-center gap-x-4 gap-y-4 pt-4">
        <ImageWithDescription description={description1} />
        <ImageWithDescription description={description2} />
        <ImageWithDescription description={description3} />
        <ImageWithDescription description={description4} />
      </div>
    </div>
  );
}
