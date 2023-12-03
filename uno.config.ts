import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray:50',
    'bg-active': 'bg-gray:20',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ], 
})
