import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const atAlias = path.resolve(__dirname, './src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': atAlias },
  },
});
