export const ROUTE_PATH = {
  HOME: '/',
  POST: '/post',
} as const;

export type RouteKey = keyof typeof ROUTE_PATH;
