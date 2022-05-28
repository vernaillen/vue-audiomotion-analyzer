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
  <audio id="audio" ref="audioRef" src="https://23613.live.streamtheworld.com/TOPZEN_SC" controls crossorigin="anonymous"></audio>
  Live stream: <a href="https://www.topradio.be/playlist/topzen" target="_blank">Zen FM</a><br />
  <VueAudioMotionAnalyzer :options="optionsStore.options" :source="audio" />
  <OptionsComponent />
</template>

<style scoped>
#audio, #vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
