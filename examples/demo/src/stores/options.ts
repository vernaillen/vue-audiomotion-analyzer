import { defineStore } from "pinia";
import type { Options } from "vue-audiomotion-analyzer";

export const useOptionsStore = defineStore("optionsStore", {
  state: () => ({
    options: {
      mode: 5,
      barSpace: 0.25,
      gradient: "rainbow",
      ledBars: false,
      lumiBars: false,
      radial: false,
      reflexAlpha: 0.25,
      reflexBright: 1,
      reflexFit: true,
      reflexRatio: 0.3,
      showBgColor: false,
      showPeaks: true,
      overlay: false,
    },
  }),
  actions: {
    updateOptions(newOptions: Options) {
      Object.assign(this.options, newOptions);
    },
  },
});
