import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: os.platform() === 'linux' ? ['@rollup/rollup-linux-x64-gnu'] : []
    }
  }
});