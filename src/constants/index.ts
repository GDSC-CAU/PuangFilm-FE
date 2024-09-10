type FrameProps = {
  image: string;
  description: string;
};

export const BASIC_FRAME_DATA: Record<
  'frame1' | 'frame2' | 'frame3' | 'frame4' | 'frame5',
  FrameProps
> = {
  frame1: {
    image: '/basicframecircle1.png',
    description: '기본 프레임 1',
  },
  frame2: {
    image: '/basicframecircle1.png',
    description: '기본 프레임 2',
  },
  frame3: {
    image: '/basicframecircle1.png',
    description: '기본 프레임 3',
  },
  frame4: {
    image: '/basicframecircle1.png',
    description: '기본 프레임 4',
  },
  frame5: {
    image: '/basicframecircle1.png',
    description: '기본 프레임 5',
  },
};
