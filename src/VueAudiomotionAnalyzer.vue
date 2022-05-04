<template>
  <div ref="audioMotionAnalyzer" id="audioMotionAnalyzer" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { Options } from 'audiomotion-analyzer'
import audioMotion from './audioMotion'

interface Props {
  options?: Options
  audioCtx?: AudioContext
}
const props = defineProps<Props>()
const audioMotionAnalyzer = ref<HTMLDivElement | null>(null)
const renderAudiomotionAnalyzer = () => {
  const extOptions = { audioCtx: props.audioCtx, ...props.options }
  audioMotion.init(audioMotionAnalyzer.value, extOptions)
}
onMounted(() => renderAudiomotionAnalyzer())
onUpdated(() => renderAudiomotionAnalyzer())
</script>
