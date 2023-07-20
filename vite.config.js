import {
    fileURLToPath,
    URL
} from 'node:url'

import {
    defineConfig
} from 'vite'
import {
    VitePWA
} from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            devOptions: {
                enabled: true
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            manifest: {
                name: 'Calculadora de días',
                short_name: 'Calcula días',
                description: 'Calcular días a partir de fechas, sumar o restar días de una fecha',
                theme_color: '#000',
                icons: [{
                        src: 'favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png'
                    },
                    {
                        src: 'favicon-16x16.png',
                        sizes: '32x32',
                        type: 'image/png'
                    }
                ],
                start_url: '/',
                display: 'standalone',
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    }
})