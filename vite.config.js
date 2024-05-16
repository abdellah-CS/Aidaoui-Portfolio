import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base URL for assets
  assetsInclude: ['**/*.pdf', '**/*.mp4'], // Specify which files to treat as static assets
});
