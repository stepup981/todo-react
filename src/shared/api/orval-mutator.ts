import { ENV } from '~/shared/config/env';

export const orvalFetch = async <T>(url: string, options: RequestInit): Promise<T> => {
  const response = await fetch(`${ENV.BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error ${response.status}`);
  }

  if ([204, 205, 304].includes(response.status)) {
    return undefined as T;
  }

  const text = await response.text();

  if (!text) {
    return undefined as T;
  }

  return JSON.parse(text) as T;
};
