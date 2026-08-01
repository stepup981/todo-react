import { defineConfig } from 'orval';
import { loadEnv } from 'vite';

const env = loadEnv('development', process.cwd(), '');
const baseUrl = env.VITE_BASE_URL;

export default defineConfig({
  api: {
    input: `${baseUrl}/swagger-json`,
    output: {
      target: './src/shared/api/generated',
      client: 'fetch',
      mode: 'tags',
      clean: true,
      override: {
        mutator: {
          path: './src/shared/api/orval-mutator.ts',
          name: 'orvalFetch',
        },
        fetch: {
          includeHttpResponseReturnType: false,
        },
        useTypeOverInterfaces: true,
      },
    },
  },
});
