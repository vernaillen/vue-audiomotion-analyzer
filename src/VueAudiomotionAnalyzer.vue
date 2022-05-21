<template>
  <div id="audioMotionAnalyzer" ref="audioMotionAnalyzer" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { Options } from 'audiomotion-analyzer'
import AudioMotion from './audioMotion'

const props = defineProps<{
  options?: Options
  mediaElement?: HTMLMediaElement
  audioCtx?: AudioContext
  audioNode?: AudioNode
}>()
let audioMotion: AudioMotion = null

const audioMotionAnalyzer = ref<HTMLDivElement | null>(null)
const renderAudiomotionAnalyzer = () => {
  const extOptions = { audioCtx: props.audioCtx, ...props.options }
  if (!audioMotion) {
    audioMotion = new AudioMotion(audioMotionAnalyzer.value, extOptions)
  }
  if (props.mediaElement) {
    audioMotion.connectHTMLMediaElement(props.mediaElement)
  }
  if (props.audioNode) {
    audioMotion.connectAudioNode(props.audioNode)
  }
}
onMounted(() => renderAudiomotionAnalyzer())
onUpdated(() => renderAudiomotionAnalyzer())
</script>
