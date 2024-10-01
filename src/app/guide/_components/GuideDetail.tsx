import Image from 'next/image';
import { GuideDetailProps, ImageWithDescriptionProps } from '@/interfaces';
import SVGTriangle from '@/styles/icons/triangle.svg';

function ImageWithDescription({ src, description }: ImageWithDescriptionProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full" style={{ paddingTop: '100%' }}>
        <Image
          src={src}
          alt={description}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 390px) 100vw"
          priority
        />
      </div>

      <div className="font-primary-darkblue flex flex-row items-center gap-1 pt-2 font-sfpro text-3xs font-extrabold">
        <SVGTriangle />
        {description}
      </div>
    </div>
  );
}

export default function GuideDetail({
  puang,
  title,
  children,
  examples,
  explanation,
}: GuideDetailProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center pt-8">
        <Image src={puang} alt="Sample Image" width={72} height={72} />
        <div className="pl-4">
          <div className="text-xl">{title}</div>
          <div className="font-sfpro text-2xs text-white">{children}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center gap-x-3 gap-y-4 pt-4">
        {examples.map((example) => (
          <ImageWithDescription
            key={`guide-detail-${example}`}
            src={example.src}
            description={example.description}
          />
        ))}{' '}
      </div>

      <div className="flex flex-col gap-1 py-4 font-sfpro text-3xs text-white">
        {explanation}
      </div>
    </div>
  );
}
