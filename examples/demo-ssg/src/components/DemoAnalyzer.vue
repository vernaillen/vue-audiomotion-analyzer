<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { VueAudioMotionAnalyzer } from 'vite-plugin-vue-audiomotion'

const audio = ref<HTMLMediaElement>()
const isPlaying = ref(false)
onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLMediaElement
  audio.value.onplaying = () => {
    isPlaying.value = true
  }
  audio.value.onpause = () => {
    isPlaying.value = false
  }
})
const options = {
  mode: 5,
  barSpace: 0.25,
  gradient: 'rainbow',
  ledBars: false,
  lumiBars: false,
  radial: false,
  reflexAlpha: 0.25,
  reflexBright: 1,
  reflexFit: true,
  reflexRatio: 0.3,
  showBgColor: false,
  showPeaks: true,
  overlay: false,
}
</script>

<template>
  <audio
    id="audio"
    ref="audioRef"
    src="https://ice2.somafm.com/beatblender-128-mp3"
    crossorigin="anonymous"
  />
  <div>
    <button v-if="!isPlaying" @click="audio?.play()">
      Play
    </button>
    <button v-if="isPlaying" @click="audio?.pause()">
      Pause
    </button>
    <br>
    Live stream:
    <a href="https://somafm.com/beatblender/" rel="noopener" target="_blank">Soma FM Beat Blender</a>
  </div>
  <VueAudioMotionAnalyzer :options="options" :source="audio" />
</template>

<style scoped>
#audio,
#vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
