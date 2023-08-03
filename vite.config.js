import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [

        react(),
        laravel({
            input: ['resources/css/index.css','resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    server: {
        host: '192.168.1.13', // replace with the IP address of the Homestead machine
        https: false,
        cors: true,
        hmr: {
            host: '192.168.1.13', // replace with the IP address of the Homestead machine
        }
    },
});
