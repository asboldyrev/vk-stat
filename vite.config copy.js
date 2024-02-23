import { defineConfig, loadEnv } from 'vite'
import laravel from 'laravel-vite-plugin'
import eslint from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            laravel({
                input: [
                    '/resources/js/site/app.js',
                    '/resources/scss/style.scss',
                    '/resources/js/admin/app.js',
                ],
                refresh: true,
            }),
            eslint({
                include: ['**/*.js', '**/*.vue'],
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                    compilerOptions: {
                        isCustomElement: (tag) => tag.startsWith('swiper-'),
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                '@admin': '/resources/js/admin',
                '@site': '/resources/js/site',
                '@scss': '/resources/scss',
            },
        },
        server: {
            host: true,
            hmr: {
                // eslint-disable-next-line no-useless-escape
                host: env.VITE_EXTERNAL_IP || env.APP_URL.replace(/^https?\:\/\//i, ''),
            },
        },
    }
})
