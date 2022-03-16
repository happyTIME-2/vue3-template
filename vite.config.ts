import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Pages({
      dirs: [
        { dir: "src/pages", baseRoute: "" },
      ],
      extensions: ['vue', 'md'],
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    Unocss({
      // variants: [
      //   (matcher) => {
      //     if (!matcher.startsWith('hover:'))
      //       return matcher
      //     return {
      //       matcher: matcher.slice(6),
      //       selector: s => `${s}:hover`
      //     }
      //   }
      // ],
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${parseInt(d)}rem` })],
        [/^p-(\d+)$/, (match) => ({ padding: `${parseInt(match[1]) / 4}rem` })],
      ]
    }),
    

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
