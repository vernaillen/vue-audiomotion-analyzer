<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { DefaultOptions } from 'vue-audiomotion-analyzer'
import OptionsComponent from '@/components/OptionsComponent.vue'
import { useOptionsStore } from '@/stores/options'

const optionsStore = useOptionsStore()
const audio = ref<HTMLMediaElement>()
onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLMediaElement
  audio.value.onplaying = () => {
    optionsStore.updateOptions({ ...DefaultOptions })
  }
})
</script>

<template>
  <audio
    id="audio"
    ref="audioRef"
    src="http://ice5.somafm.com/groovesalad-256-mp3"
    controls
    crossorigin="anonymous"
  />
  <div>
    Live stream:
    <a href="https://somafm.com/groovesalad/" rel="noopener" target="_blank">Soma FM Groove Salad</a>
  </div>
  <VueAudioMotionAnalyzer :options="optionsStore.options" :source="audio" />
  <OptionsComponent />
</template>

<style scoped>
#audio,
#vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
