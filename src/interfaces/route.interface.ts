export const ROUTE_TYPES = {
  HOME: '/',
  CONCEPT: '/concept',
  EMAIL: '/email',
  ERROR: '/error',
  FRAME: '/frame',
  GUIDE: '/guide',
  LIST: '/list',
  LOGIN: '/login',
  UPLOAD: '/upload',
  WAITING: '/waiting',
} as const;
export type RouteType = (typeof ROUTE_TYPES)[keyof typeof ROUTE_TYPES];
