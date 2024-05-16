import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Define entry points for your PDF and video files
        main: './src/main.tsx', // Replace with your actual entry point
        pdf: './src/assets/cv.pdf',
        video: './src/assets/bg-video.mp4',
      },
      // Ensure that Vite treats PDF and video files as assets
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
