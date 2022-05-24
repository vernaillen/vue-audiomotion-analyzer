<template>
  <label>mode:</label>
  <select v-model="options.mode" class="text-gray-800 pl-2 mx-2 mb-3">
    <option v-for="mode in modes" :key="mode">{{ mode }}</option></select
  ><br />
  <label>alphaBars:</label> <input v-model="options.alphaBars" type="checkbox" :class="checkBoxStyle" />
  <label>ledBars:</label> <input v-model="options.ledBars" type="checkbox" :class="checkBoxStyle" />
  <label>loRes:</label> <input v-model="options.loRes" type="checkbox" :class="checkBoxStyle" />
  <label>lumiBars:</label> <input v-model="options.lumiBars" type="checkbox" :class="checkBoxStyle" />
  <label>outlineBars:</label> <input v-model="options.outlineBars" type="checkbox" :class="checkBoxStyle" />
  <label>showBgColor:</label> <input v-model="options.showBgColor" type="checkbox" :class="checkBoxStyle" />
  <label>showFPS:</label> <input v-model="options.showFPS" type="checkbox" :class="checkBoxStyle" />
  <label>showPeaks:</label> <input v-model="options.showPeaks" type="checkbox" :class="checkBoxStyle" />
  <label>showScaleX:</label> <input v-model="options.showScaleX" type="checkbox" :class="checkBoxStyle" />
  <label>showScaleY:</label> <input v-model="options.showScaleY" type="checkbox" :class="checkBoxStyle" />
  <label>splitGradient:</label> <input v-model="options.splitGradient" type="checkbox" :class="checkBoxStyle" />
  <label>stereo:</label> <input v-model="options.stereo" type="checkbox" :class="checkBoxStyle" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { Options } from 'vue-audiomotion-analyzer'

const props = defineProps({
  modelValue: { type: Object as PropType<Options>, required: true },
})
const options = ref(props.modelValue)
const modes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const checkBoxStyle =
  'form-check-input appearance-none w-8 mr-4 mb-3 rounded-full h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
</script>
