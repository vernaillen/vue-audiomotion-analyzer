<template>
  <label>presets:</label>
  <button
    v-for="(preset, index) in presets"
    :key="index"
    :value="index"
    @click="setPreset(index)"
    :class="buttonStyle(index)">
    {{ preset.name }}
  </button>
  <br />
  <label>mode:</label>
  <select v-model="optionsStore.options.mode" class="text-gray-800 pl-2 mx-2 mb-3">
    <option v-for="mode in modes" :key="mode">{{ mode }}</option></select
  ><br />
  <label>alphaBars:</label>
  <input v-model="optionsStore.options.alphaBars" type="checkbox" :class="checkBoxStyle" @click="" />
  <label>ledBars:</label> <input v-model="optionsStore.options.ledBars" type="checkbox" :class="checkBoxStyle" />
  <label>loRes:</label> <input v-model="optionsStore.options.loRes" type="checkbox" :class="checkBoxStyle" />
  <label>lumiBars:</label> <input v-model="optionsStore.options.lumiBars" type="checkbox" :class="checkBoxStyle" />
  <label>outlineBars:</label>
  <input v-model="optionsStore.options.outlineBars" type="checkbox" :class="checkBoxStyle" />
  <label>showBgColor:</label>
  <input v-model="optionsStore.options.showBgColor" type="checkbox" :class="checkBoxStyle" /> <label>showFPS:</label>
  <input v-model="optionsStore.options.showFPS" type="checkbox" :class="checkBoxStyle" /> <label>showPeaks:</label>
  <input v-model="optionsStore.options.showPeaks" type="checkbox" :class="checkBoxStyle" /> <label>showScaleX:</label>
  <input v-model="optionsStore.options.showScaleX" type="checkbox" :class="checkBoxStyle" /> <label>showScaleY:</label>
  <input v-model="optionsStore.options.showScaleY" type="checkbox" :class="checkBoxStyle" />
  <label>splitGradient:</label>
  <input v-model="optionsStore.options.splitGradient" type="checkbox" :class="checkBoxStyle" />
  <label>stereo:</label>
  <input v-model="optionsStore.options.stereo" type="checkbox" :class="checkBoxStyle" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { DefaultOptions } from 'vue-audiomotion-analyzer'
import { useOptionsStore } from '@/stores/options'

const optionsStore = useOptionsStore()

const modes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const selectedPreset = ref(0)
const updatedPreset = ref(false)
const setPreset = presetId => {
  const newOptions = { ...DefaultOptions, ...presets[presetId].options }
  optionsStore.updateOptions(newOptions)
  selectedPreset.value = presetId
  updatedPreset.value = true
}
watch(optionsStore.options, () => {
  console.log('watched optionsStore.options change')
  if (!updatedPreset.value) selectedPreset.value = -1
  updatedPreset.value = false
})
// Visualization presets
const presets = [
  {
    name: 'Defaults',
    options: DefaultOptions,
  },
  {
    name: 'Classic LEDs',
    options: {
      mode: 3,
      barSpace: 0.4,
      gradient: 'classic',
      ledBars: true,
      lumiBars: false,
      radial: false,
      reflexRatio: 0,
      showBgColor: true,
      showPeaks: true,
    },
  },
  {
    name: 'Mirror wave',
    options: {
      mode: 10,
      fillAlpha: 0.6,
      gradient: 'rainbow',
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
    name: 'Radial overlay',
    options: {
      mode: 5,
      barSpace: 0.1,
      gradient: 'prism',
      ledBars: false,
      radial: true,
      showBgColor: true,
      showPeaks: true,
      spinSpeed: 1,
      overlay: true,
    },
  },
  {
    name: 'Reflex Bars',
    options: {
      mode: 5,
      barSpace: 0.25,
      gradient: 'rainbow',
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
    name: 'Lumi Bars',
    options: {
      mode: 1,
      barSpace: 0.1,
      gradient: 'classic',
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
    },
  },
]
const checkBoxStyle =
  'form-check-input appearance-none w-8 mr-4 mb-3 rounded-full h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'

const buttonStyle = id => {
  let classes = 'px-3 py-1 mx-1 my-3 font-medium text-sm text-black rounded'
  if (id == selectedPreset.value) {
    classes += ' bg-[blue] text-white'
  } else {
    classes += ' bg-gray-50 hover:bg-gray-300'
  }
  return classes
}
</script>
