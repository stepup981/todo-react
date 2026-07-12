export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;
export type Theme = (typeof THEME)[keyof typeof THEME];
