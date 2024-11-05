'use client';

import Image from 'next/image';
import React, { ChangeEventHandler, Dispatch, useRef, useState } from 'react';
import useModal from '@/app/hooks/useModal';
import { CompoundModal } from '@/components/Modal/ModalMain';
import {
  IMAGE_UPLOAD_CONTENT,
  IMAGE_UPLOAD_TITLE,
  MAX_IMAGE_NUMBER,
  MIN_IMAGE_NUMBER,
} from '@/constants';
import { ImageFile } from '@/interfaces';
import SVGAdd from '@/styles/icons/add.svg';
import SVGDelete from '@/styles/icons/delete.svg';

interface ImageUploadProps {
  images: ImageFile[];
  setImages: Dispatch<React.SetStateAction<ImageFile[]>>;
  min: number;
  max: number;
}

function ImageUpload({
  images,
  setImages,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  min = MIN_IMAGE_NUMBER,
  max = MAX_IMAGE_NUMBER,
}: ImageUploadProps) {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpdateImages: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target;
    if (files) {
      const newImages = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      const updatedImages = [...images, ...newImages].slice(0, max);
      setImages(updatedImages);
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="relative">
        <div className="scrollbar-hide aspect-square w-full overflow-y-auto rounded-2xl border-4 border-dashed border-white text-xs">
          {images.length !== 0 && (
            <button
              type="button"
              className="absolute -top-8 right-2"
              onClick={handleAddClick}
            >
              <SVGAdd />
            </button>
          )}
          <input
            id="image-upload"
            name="image-upload"
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleUpdateImages}
            multiple
            accept="image/*"
          />
          {images.length === 0 ? (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label
              className="flex h-full w-full flex-col items-center justify-center"
              htmlFor="image-upload"
            >
              <svg
                width="63"
                height="46"
                viewBox="0 0 63 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44853 42.1838C5.93382 42.1838 4.00735 41.5147 2.66912 40.1765C1.33088 38.8529 0.661764 36.9412 0.661764 34.4412V7.75C0.661764 5.23529 1.33088 3.31618 2.66912 1.99265C4.00735 0.669117 5.93382 0.00735202 8.44853 0.00735202H45.5294C48.0588 0.00735202 49.9853 0.67647 51.3088 2.01471C52.6471 3.33823 53.3162 5.25 53.3162 7.75V19.7279C52.8603 19.6397 52.3971 19.5735 51.9265 19.5294C51.4559 19.4706 50.9779 19.4412 50.4926 19.4412C50.0074 19.4412 49.5221 19.4706 49.0368 19.5294C48.5662 19.5735 48.0956 19.6471 47.625 19.75V8.43382C47.625 7.49265 47.3897 6.80147 46.9191 6.36029C46.4632 5.91912 45.7941 5.69853 44.9118 5.69853H9.06618C8.18382 5.69853 7.50735 5.91912 7.03676 6.36029C6.58088 6.80147 6.35294 7.49265 6.35294 8.43382V30.7353L11.6029 26.0588C12.0588 25.6471 12.5074 25.3456 12.9485 25.1544C13.4044 24.9485 13.8971 24.8456 14.4265 24.8456C14.9412 24.8456 15.4485 24.9559 15.9485 25.1765C16.4632 25.3824 16.9485 25.6838 17.4044 26.0809L21.4632 29.7426L31.4118 20.8529C31.9118 20.4118 32.4338 20.0882 32.9779 19.8824C33.5221 19.6618 34.0956 19.5515 34.6985 19.5515C35.2721 19.5515 35.8382 19.6618 36.3971 19.8824C36.9706 20.0882 37.5 20.4191 37.9853 20.875L40.5662 23.3015C39.0221 24.6544 37.8015 26.2868 36.9044 28.1985C36.0074 30.1103 35.5588 32.1618 35.5588 34.3529C35.5588 35.7794 35.7574 37.1544 36.1544 38.4779C36.5515 39.8015 37.1029 41.0368 37.8088 42.1838H8.44853ZM18.9265 21.8235C17.9265 21.8235 17.0074 21.5809 16.1691 21.0956C15.3456 20.6103 14.6838 19.9559 14.1838 19.1324C13.6985 18.2941 13.4559 17.375 13.4559 16.375C13.4559 15.3897 13.6985 14.4853 14.1838 13.6618C14.6838 12.8235 15.3456 12.1618 16.1691 11.6765C17.0074 11.1765 17.9265 10.9265 18.9265 10.9265C19.9118 10.9265 20.8162 11.1765 21.6397 11.6765C22.4632 12.1618 23.1176 12.8235 23.6029 13.6618C24.1029 14.4853 24.3529 15.3897 24.3529 16.375C24.3529 17.375 24.1029 18.2941 23.6029 19.1324C23.1176 19.9559 22.4632 20.6103 21.6397 21.0956C20.8162 21.5809 19.9118 21.8235 18.9265 21.8235ZM50.5147 45.9779C48.9265 45.9779 47.4265 45.6765 46.0147 45.0735C44.6176 44.4706 43.3824 43.6324 42.3088 42.5588C41.25 41.4853 40.4118 40.2426 39.7941 38.8309C39.1912 37.4338 38.8897 35.9412 38.8897 34.3529C38.8897 32.7647 39.1912 31.2721 39.7941 29.875C40.4118 28.4779 41.25 27.2426 42.3088 26.1691C43.3824 25.0956 44.6176 24.2574 46.0147 23.6544C47.4265 23.0515 48.9265 22.75 50.5147 22.75C52.1029 22.75 53.5956 23.0515 54.9926 23.6544C56.4044 24.2574 57.6397 25.0956 58.6985 26.1691C59.7721 27.2279 60.6103 28.4632 61.2132 29.875C61.8162 31.2721 62.1176 32.7647 62.1176 34.3529C62.1176 35.9412 61.8162 37.4338 61.2132 38.8309C60.6103 40.2426 59.7721 41.4779 58.6985 42.5368C57.625 43.6103 56.3824 44.4485 54.9706 45.0515C53.5735 45.6691 52.0882 45.9779 50.5147 45.9779ZM50.5368 41.6544C51.0368 41.6544 51.5221 41.4338 51.9926 40.9926L57.0662 36.2279C57.4632 35.875 57.6618 35.4412 57.6618 34.9265C57.6618 34.4118 57.4779 33.9779 57.1103 33.625C56.7574 33.2721 56.3235 33.1029 55.8088 33.1176C55.5588 33.1176 55.3162 33.1691 55.0809 33.2721C54.8456 33.375 54.6544 33.5147 54.5074 33.6912L53.2059 35.1912L52.4338 35.9853L52.5441 33.7794V28.9706C52.5441 28.4118 52.3529 27.9485 51.9706 27.5809C51.6029 27.2132 51.125 27.0294 50.5368 27.0294C49.9632 27.0294 49.4853 27.2132 49.1029 27.5809C48.7206 27.9485 48.5294 28.4118 48.5294 28.9706V33.7794L48.6397 35.9853L47.8676 35.1912L46.5882 33.6912C46.25 33.2941 45.8088 33.1029 45.2647 33.1176C44.75 33.1176 44.3088 33.2941 43.9412 33.6471C43.5882 33.9853 43.4118 34.4118 43.4118 34.9265C43.4265 35.4412 43.625 35.875 44.0074 36.2279L49.0809 40.9926C49.5368 41.4338 50.0221 41.6544 50.5368 41.6544Z"
                  fill="#133365"
                />
              </svg>
              <span>파일을 업로드하세요</span>
            </label>
          ) : (
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={`file-image-${index}`}
                    className="relative aspect-square"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      fill
                      src={image.preview}
                      alt={`Uploaded ${index + 1}`}
                      className={`h-full w-full rounded-lg object-cover ${selectedImageIndex === index ? 'border-4 border-[#007AFF]' : ''}`}
                      draggable={false}
                    />
                    {selectedImageIndex === index && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenModal();
                        }}
                        className="absolute right-1.5 top-1.5 overflow-hidden rounded-full"
                      >
                        <SVGDelete />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <CompoundModal
          isOpen={isOpen}
          confirmLabel="확인"
          cancelLabel="취소"
          comfirmFn={() => {
            handleDeleteImage(selectedImageIndex as number);
            handleCloseModal();
          }}
          cancelFn={handleCloseModal}
          modalLocation="items-end"
        >
          <CompoundModal.Title>{IMAGE_UPLOAD_TITLE}</CompoundModal.Title>
          <CompoundModal.Content>{IMAGE_UPLOAD_CONTENT}</CompoundModal.Content>
        </CompoundModal>
      )}
    </>
  );
}

export default ImageUpload;
