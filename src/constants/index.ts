type FrameData = {
  circle: string;
  description: string;
  frame: string;
};

export const BASIC_FRAME_DATA: Record<
  'frame1' | 'frame2' | 'frame3' | 'frame4' | 'frame5',
  FrameData
> = {
  frame1: {
    circle: '/basicframecircle1.png',
    description: '기본 프레임 1-없음',
    frame: '',
  },
  frame2: {
    circle: '/basicframecircle2.png',
    description: '기본 프레임 2-흰색',
    frame: '/basicframe1.png',
  },
  frame3: {
    circle: '/basicframecircle3.png',
    description: '기본 프레임 3-검은색',
    frame: '/basicframe2.png',
  },
  frame4: {
    circle: '/basicframecircle4.png',
    description: '기본 프레임 4-파란색',
    frame: '/basicframe3.png',
  },
  frame5: {
    circle: '/basicframecircle5.png',
    description: '기본 프레임 4-핑크색',
    frame: '/basicframe4.png',
  },
};
