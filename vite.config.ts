import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

const atAlias = path.resolve(__dirname, './src');
const isAnalyze = process.env.ANALYZE === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    isAnalyze &&
      visualizer({
        filename: './bundle-visualizer.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ],
  resolve: {
    alias: { '~': atAlias },
  },
});
