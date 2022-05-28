<template>
  <div id="audioMotionAnalyzer" ref="audioMotionAnalyzerRef" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue'
import AudioMotionAnalyzer, { Options, GradientOptions } from 'audiomotion-analyzer'
const props = defineProps<{
  options?: Options
  gradient?: GradientOptions
  source?: HTMLMediaElement | AudioNode
}>()
const audioMotionAnalyzerRef = ref<HTMLDivElement | null>(null)
let audioMotionAnalyzer: AudioMotionAnalyzer = null
onMounted(() => {
  try {
    const allOptions = { source: props.source, ...props.options }
    audioMotionAnalyzer = new AudioMotionAnalyzer(audioMotionAnalyzerRef.value, allOptions)
    if (props.gradient) {
      audioMotionAnalyzer.registerGradient('custom-gradient', props.gradient)
      audioMotionAnalyzer.setOptions({ gradient: 'custom-gradient' })
    }
  } catch (e) {
    console.error('error mounting VueAudiomotionAnalyzer: ', e)
  }
})
onUpdated(() => {
  if (audioMotionAnalyzer) audioMotionAnalyzer.setOptions(props.options)
})
watch(props.options, async newOptions => {
  if (audioMotionAnalyzer) audioMotionAnalyzer.setOptions(newOptions)
})
</script>
