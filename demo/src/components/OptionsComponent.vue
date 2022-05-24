<template>
  <button @click="options.mode = options.mode + 1">{{ options.mode }}</button>
  <button @click="options.height = options.height + 100">{{ options.height }}</button>
  <input type="checkbox" :checked="options.showScale" @click="options.showScale = !options.showScale" />
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import type { Options } from 'audiomotion-analyzer'

const props = defineProps({
  modelValue: { type: Object as PropType<Options>, required: true },
})

const options = computed({
  get: () => props.modelValue,
})
</script>
