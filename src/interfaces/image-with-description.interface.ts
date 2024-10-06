export interface ImageWithDescriptionProps {
  src: string;
  description: string;
}
export interface GuideDetailProps {
  puang: string;
  title: string;
  children: React.ReactNode;
  examples: { src: string; description: string }[];
  explanation: React.ReactNode;
}
