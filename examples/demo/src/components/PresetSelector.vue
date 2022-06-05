<template>
  <div class="mt-2">
    <button
      v-for="(preset, index) in presets"
      :key="index"
      :value="index"
      v-btnClass="index == selectedPreset"
      @click="setPreset(index)"
    >
      {{ preset.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { DefaultOptions } from "vue-audiomotion-analyzer";
import { useOptionsStore } from "@/stores/options";

const presets = [
  {
    name: "Defaults",
    options: DefaultOptions,
  },
  {
    name: "Classic LEDs",
    options: {
      mode: 3,
      barSpace: 0.4,
      gradient: "classic",
      ledBars: true,
      lumiBars: false,
      radial: false,
      reflexRatio: 0,
      showBgColor: true,
      showPeaks: true,
    },
  },
  {
    name: "Mirror wave",
    options: {
      mode: 10,
      fillAlpha: 0.6,
      gradient: "rainbow",
      lineWidth: 2,
      mirror: -1,
      radial: false,
      reflexAlpha: 1,
      reflexBright: 1,
      reflexRatio: 0.5,
      showPeaks: false,
    },
  },
  {
    name: "Radial overlay",
    options: {
      mode: 5,
      barSpace: 0.1,
      gradient: "prism",
      ledBars: false,
      radial: true,
      showBgColor: true,
      showPeaks: true,
      spinSpeed: 1,
      overlay: true,
    },
  },
  {
    name: "Reflex Bars",
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
  },
  {
    name: "Lumi Bars",
    options: {
      mode: 1,
      barSpace: 0,
      gradient: "classic",
      alphaBars: true,
      ledBars: false,
      lumiBars: true,
      radial: false,
      reflexAlpha: 0.25,
      reflexBright: 1,
      reflexFit: true,
      reflexRatio: 0.3,
      showBgColor: false,
      showPeaks: false,
      showScaleX: false,
      overlay: false,
      fillAlpha: 0.6,
      mirror: 1,
      smoothing: 0.9,
    },
  },
];

const selectedPreset = ref(0);
const updatedPreset = ref(false);
const optionsStore = useOptionsStore();
const setPreset = (presetId: number) => {
  const newOptions = { ...DefaultOptions, ...presets[presetId].options };
  optionsStore.updateOptions(newOptions);
  selectedPreset.value = presetId;
  updatedPreset.value = true;
};
watch(optionsStore.options, () => {
  if (!updatedPreset.value) selectedPreset.value = -1;
  updatedPreset.value = false;
});
</script>
