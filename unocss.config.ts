import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['btn', 'rounded-xl border-1 text-12px px-2 py-1 font-bold text-white bg-teal-600 hover:bg-teal-700'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})