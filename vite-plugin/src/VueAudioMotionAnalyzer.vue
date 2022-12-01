<template>
  <div id="vueAudioMotionAnalyzer" ref="audioMotionAnalyzerRef" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue'
import AudioMotionAnalyzer, { GradientOptions, type Options } from 'audiomotion-analyzer'
import DefaultOptions from './DefaultOptions'

const props = defineProps<{
  options?: Options
  gradient?: GradientOptions
  source: HTMLMediaElement | AudioNode
  fullScreen?: boolean
}>()
const audioMotionAnalyzerRef = ref<HTMLDivElement | null>(null)
let audioMotionAnalyzer: AudioMotionAnalyzer = null

onMounted(async () => {
  if (props.source) {
    initAnalyzer()
  } else {
    // wait for source to be available onUpdated
  }
})
onUpdated(() => {
  if (!audioMotionAnalyzer && props.source) {
    initAnalyzer()
  } else if (audioMotionAnalyzer && props.source) {
    const allOptions = { ...DefaultOptions, source: props.source, ...props.options }
    audioMotionAnalyzer.setOptions(allOptions)
  } else {
    console.error('no audio source available')
    initAnalyzer()
  }
  //audioMotionAnalyzer.toggleFullscreen()
})
const initAnalyzer = () => {
  try {
    const allOptions = { ...DefaultOptions, source: props.source, ...props.options }
    audioMotionAnalyzer = new AudioMotionAnalyzer(audioMotionAnalyzerRef.value, allOptions)
    if (props.gradient) {
      audioMotionAnalyzer.registerGradient('custom-gradient', props.gradient)
      audioMotionAnalyzer.setOptions({ gradient: 'custom-gradient' })
    }
  } catch (e) {
    console.error('error mounting VueAudioMotionAnalyzer: ', e)
  }
}

const options = ref(props.options)
watch(options.value, async newOptions => {
  if (audioMotionAnalyzer) audioMotionAnalyzer.setOptions(newOptions)
})
</script>
