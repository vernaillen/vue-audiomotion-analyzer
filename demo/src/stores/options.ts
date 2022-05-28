import { defineStore } from 'pinia'
import { DefaultOptions, type Options } from 'vue-audiomotion-analyzer'

export const useOptionsStore = defineStore('optionsStore', {
  state: () => ({
    options: { ...DefaultOptions },
  }),
  actions: {
    updateOptions(newOptions: Options) {
      Object.assign(this.options, newOptions)
    },
  },
})
