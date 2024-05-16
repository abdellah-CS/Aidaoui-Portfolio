import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Exclude the video file from Rollup bundling
    rollupOptions: {
      input: {
        main: './src/main.tsx',
      },
    },
  },
});
