<template>
  <label>mode:</label>
  <select v-model="options.mode">
    <option v-for="mode in modes" :key="mode">{{ mode }}</option>
  </select>
  <br />
  <label>height:</label>
  <select v-model="options.height">
    <option v-for="height in heights" :key="height">{{ height }}</option>
  </select>
  <br />
  <label>showScaleX:</label>
  <input v-model="options.showScaleX" type="checkbox" />
  <br />
  <label>showScaleY:</label>
  <input v-model="options.showScaleY" type="checkbox" />
  <br />
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
const heights: number[] = [200, 250, 300, 350, 400]
</script>
