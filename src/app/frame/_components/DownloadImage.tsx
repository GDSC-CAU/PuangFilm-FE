import { DownloadImageProps } from '@/interfaces';
export default async function DownloadImage({
  colorOfCircle,
  imageSrc,
  frameWidth,
  frameHeight,
}: DownloadImageProps) {
  const imgX = colorOfCircle === '/premiumframe2.png' ? 37 : 16;
  const imgY = colorOfCircle === '/premiumframe2.png' ? 37 : 16;
  try {
    const scale = 4;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Canvas context is not available.');
    }

    const canvasWidth = frameWidth * scale;
    const canvasHeight = frameHeight * scale;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    image1.src = imageSrc;
    if (colorOfCircle && colorOfCircle !== '') {
      image2.src = colorOfCircle;
    }

    image1.onload = () => {
      context.drawImage(
        image1,
        imgX * scale,
        imgY * scale,
        206 * scale,
        206 * scale,
      );
      if (colorOfCircle && colorOfCircle !== '') {
        image2.onload = () => {
          context.drawImage(image2, 0, 0, canvasWidth, canvasHeight);
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'CAU_PUANG_FILM.png';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
          }, 'image/png');
        };
      } else {
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CAU_PUANG_FILM.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }
    };
  } catch (err) {
    alert('다운로드에 실패했습니다.');
  }
}
