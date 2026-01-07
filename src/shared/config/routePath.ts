export const ROUTE_PATH = {
  HOME: '/',
  TODO: '/todo',
} as const

export type RouteKey = keyof typeof ROUTE_PATH

