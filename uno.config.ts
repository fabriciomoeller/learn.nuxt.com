import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray:10'
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ], 
})
