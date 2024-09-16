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

export const PREMIUM_FRAME_DATA: Record<
  'frame1' | 'frame2' | 'frame3' | 'frame4' | 'frame5' | 'frame6',
  FrameData
> = {
  frame1: {
    circle: '/premiumframecircle1.png',
    description: '기본 프레임 1-푸앙이',
    frame: '/premiumframe1.png',
  },
  frame2: {
    circle: '/premiumframecircle2.png',
    description: '기본 프레임 2-체크',
    frame: '/premiumframe2.png',
  },
  frame3: {
    circle: '/premiumframecircle3.png',
    description: '기본 프레임 3-darkblue',
    frame: '/premiumframe3.png',
  },
  frame4: {
    circle: '/premiumframecircle4.png',
    description: '기본 프레임 4-smile',
    frame: '/premiumframe4.png',
  },
  frame5: {
    circle: '/premiumframecircle5.png',
    description: '기본 프레임 4-insta',
    frame: '/premiumframe5.png',
  },
  frame6: {
    circle: '/premiumframecircle6.png',
    description: '기본 프레임 4-회색',
    frame: '/premiumframe6.png',
  },
};
