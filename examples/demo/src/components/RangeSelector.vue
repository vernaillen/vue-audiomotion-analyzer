<script setup lang="ts">
import { ref } from 'vue'
import { useOptionsStore } from '@/stores/options'

const props = defineProps<{
  option: string
  min: string
  max: string
  step: string
}>()

const optionsStore = useOptionsStore()
const options = ref(optionsStore.options)
</script>

<template>
  <span class="inline-flex pr-5">
    <label for="mirror" class="form-label">{{ props.option }}: </label>
    <span class="inline-flex space-y-2 p-2 w-20 mb-2">
      <input
        v-model="options[props.option]"
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        class="w-full h-1 bg-green-200 appearance-none slider-thumb"
      >
    </span>
    <span class="inline-flex w-5">{{ options[props.option] }}</span>
  </span>
</template>
