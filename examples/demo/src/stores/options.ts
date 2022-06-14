import { defineStore } from "pinia";
import type { Options } from "vue-audiomotion-analyzer";
import { presets } from "@/presets";

export const useOptionsStore = defineStore("optionsStore", {
  state: () => ({
    options: presets[4].options,
  }),
  actions: {
    updateOptions(newOptions: Options) {
      Object.assign(this.options, newOptions);
    },
  },
});
