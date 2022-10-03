<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OptionsComponent from '@/components/OptionsComponent.vue'
import { useOptionsStore } from '@/stores/options'

const optionsStore = useOptionsStore()
const audio = ref<HTMLMediaElement>()
const fullScreenToggle = ref(false)
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
</script>

<template>
  <audio
    id="audio"
    ref="audioRef"
    src="https://ice2.somafm.com/beatblender-128-mp3"
    crossorigin="anonymous"
  />
  <button v-if="!isPlaying" class="px-2 py-1 mr-2 font-medium text-sm text-black rounded bg-gray-50 btnHover" @click="audio?.play()">
    Play
  </button>
  <button v-if="isPlaying" class="px-2 py-1 mr-2 font-medium text-sm text-black rounded bg-gray-50 btnHover" @click="audio?.pause()">
    Pause
  </button>
  <div>
    Live stream:
    <a href="https://somafm.com/beatblender/" rel="noopener" target="_blank">Soma FM Beat Blender</a> (<a href="https://somafm.com/beatblender/songhistory.html" rel="noopener" target="_blank">song history</a>)
  </div>
  <VueAudioMotionAnalyzer :options="optionsStore.options" :source="audio" :full-screen="fullScreenToggle" />
  <div class="w-full">
    <button
      class="px-2 py-1 mr-2 font-medium text-sm text-black rounded bg-gray-50 btnHover right-0"
      @click="fullScreenToggle = !fullScreenToggle"
    >
      FullScreen
    </button>
  </div>
  <OptionsComponent />
</template>

<style scoped>
#audio,
#vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
