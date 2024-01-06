import { defineStore } from 'pinia'
import type { Options } from 'vite-plugin-vue-audiomotion'

export const useOptionsStore = defineStore('optionsStore', {
  state: () => ({
    options: {
      alphaBars: false,
      loRes: false,
      mode: 5,
      barSpace: 0.25,
      gradient: 'rainbow',
      ledBars: false,
      lumiBars: false,
      outlineBars: false,
      radial: false,
      reflexAlpha: 0.25,
      reflexBright: 1,
      reflexFit: true,
      reflexRatio: 0.3,
      showBgColor: false,
      showFPS: false,
      showPeaks: true,
      showScaleX: false,
      showScaleY: false,
      splitGradient: false,
      channelLayout: 'single',
      overlay: false,
    } as Options,
  }),
  actions: {
    updateOptions(newOptions: Options) {
      Object.assign(this.options, newOptions)
    },
    toggleBoolean(key: keyof Options) {
      if (typeof this.options[key] === 'boolean') {
        this.options[key] = !this.options[key] as any
      } else {
        throw new Error(`Key ${key} is not a boolean`)
      }
    }
  },
})
