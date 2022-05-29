<template>
  <PresetsSelection />
  <label>mode:</label>
  <select v-model="optionsStore.options.mode" class="text-gray-800 pl-2 mx-2 mb-3">
    <option v-for="mode in modes" :key="mode">{{ mode }}</option></select
  ><br />
  <button v-btnClass="optionsStore.options.alphaBars" @click="toggle">alphaBars</button>
  <button v-btnClass="optionsStore.options.ledBars" @click="toggle">ledBars</button>
  <button v-btnClass="optionsStore.options.loRes" @click="toggle">loRes</button>
  <button v-btnClass="optionsStore.options.lumiBars" @click="toggle">lumiBars</button>
  <button v-btnClass="optionsStore.options.outlineBars" @click="toggle">outlineBars</button>
  <button v-btnClass="optionsStore.options.showBgColor" @click="toggle">showBgColor</button>
  <button v-btnClass="optionsStore.options.showFPS" @click="toggle">showFPS</button>
  <button v-btnClass="optionsStore.options.showPeaks" @click="toggle">showPeaks</button>
  <button v-btnClass="optionsStore.options.showScaleX" @click="toggle">showScaleX</button>
  <button v-btnClass="optionsStore.options.showScaleY" @click="toggle">showScaleY</button>
  <button v-btnClass="optionsStore.options.splitGradient" @click="toggle">splitGradient</button>
  <button v-btnClass="optionsStore.options.stereo" @click="toggle">stereo</button>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'
import PresetsSelection from './PresetsSelection.vue'

const optionsStore = useOptionsStore()

const modes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const toggle = (event: Event) => {
  optionsStore.options[event.target.innerText] = !optionsStore.options[event.target.innerText]
}
</script>
