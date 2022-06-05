<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { GradientOptions, Options } from 'vue-audiomotion-analyzer'
import OptionsComponent from './OptionsComponent.vue'
import { useOptionsStore } from '@/stores/options'

const optionsStore = useOptionsStore()
const audio = ref<HTMLMediaElement>()
onMounted(() => {
  audio.value = <HTMLMediaElement> document.getElementById('audio')
})
</script>

<template>
  <audio id="audio" ref="audioRef" src="https://ice5.somafm.com/deepspaceone-128-mp3" controls crossorigin="anonymous"></audio>
  Live stream: <a href="https://somafm.com/deepspaceone/" target="_blank">Deep Space One</a> by <a href="https://somafm.com/" target="_blank">soma fm</a><br />
  <VueAudioMotionAnalyzer :options="optionsStore.options" :source="audio" />
  <OptionsComponent />
</template>

<style scoped>
#audio, #vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
