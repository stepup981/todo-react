import { ENV } from './env';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
  body?: unknown;
}

export class ApiBase {
  private async request<T>(endpoint: string, method: HttpMethod, options: RequestOptions = {}): Promise<T> {
    const { body, ...restOptions } = options;
    const response = await fetch(`${ENV.BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...restOptions.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include',
      ...restOptions,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `HTTP error ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, 'GET', options);
  }

  public post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, 'POST', { ...options, body });
  }

  public put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, 'PUT', { ...options, body });
  }

  public patch<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, 'PATCH', { ...options, body });
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, 'DELETE', options);
  }
}
