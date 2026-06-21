import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        photos: resolve(__dirname, 'pages/photos/photos.html'), // ajuste o caminho conforme sua pasta
        videos: resolve(__dirname, 'pages/videos/videos.html'),
        collections: resolve(__dirname, 'pages/collections/collection.html'),
        favorite: resolve(__dirname, 'pages/favorite/favorite.html')
      }
    }
  }
});