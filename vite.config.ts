import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@media': path.resolve(__dirname, 'src/media'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [react(), svgr()],
})
