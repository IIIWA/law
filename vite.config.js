import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { defineConfig } from 'vite';

export default defineConfig({
    // ...
    root: './src',
    // base: './',
    base: '/law/',
    sourcemap: true,
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                main: './src/index.html',
                news: './src/news.html',
                postPage: './src/post-page.html',
                contacts: './src/contacts.html',
                about: './src/about.html',
            },
        },
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            /* pass your config */
            png: {
                quality: 70,
            },
            jpeg: {
                quality: 70,
            },
            jpg: {
                quality: 70,
            },
            webp: {
                quality: 70,
            },
        }),
    ],
});
