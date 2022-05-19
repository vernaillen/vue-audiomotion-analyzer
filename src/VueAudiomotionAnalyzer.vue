<template>
  <div id="audioMotionAnalyzer" ref="audioMotionAnalyzer" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { Options } from 'audiomotion-analyzer'
import AudioMotion from './audioMotion'

const props = defineProps<{
  options?: Options
  audioCtx?: AudioContext
  audioNode?: AudioNode
}>()

const audioMotionAnalyzer = ref<HTMLDivElement | null>(null)
const renderAudiomotionAnalyzer = () => {
  const extOptions = { audioCtx: props.audioCtx, ...props.options }
  const audioMotion = new AudioMotion(audioMotionAnalyzer.value, extOptions)
  if (props.audioNode) {
    audioMotion.connectAudioNode(props.audioNode)
  }
}
onMounted(() => renderAudiomotionAnalyzer())
onUpdated(() => renderAudiomotionAnalyzer())
</script>
