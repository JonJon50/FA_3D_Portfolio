import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//       },
//       output: {
//         dir: 'dist',
//         assetFileNames: 'assets/[name]-[hash][ext][query]',
//       },
//       // Copy the desktop_pc folder to the build directory
//       copy: {
//         targets: [
//           { src: 'desktop_pc/**/*', dest: 'dist' },
//         ],
//       },
//     },
//   },
// });
