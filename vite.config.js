import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {

        main: resolve(__dirname, 'index.html'),
        

        collections: resolve(__dirname, 'pages/collections/collection.html'),
        collection_detail: resolve(__dirname, 'pages/collections/collection_detail.html'),
        

        favorite: resolve(__dirname, 'pages/favorite/favorite.html'),
        

        photos: resolve(__dirname, 'pages/photos/photos.html'), 
        photo_detail: resolve(__dirname, 'pages/photos/photo_detail.html'),
        

        videos: resolve(__dirname, 'pages/videos/videos.html'),
        video_detail: resolve(__dirname, 'pages/videos/video_detail.html')
      }
    }
  }
});