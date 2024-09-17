export interface FrameProps {
  circle: string;
  description: string;
  onClick: () => void;
}

export interface DownloadImageProps {
  colorOfCircle: string;
  imageSrc: string;
  frameWidth: number;
  frameHeight: number;
}
