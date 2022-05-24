<template>
  <button v-if="!isLoaded" :class="buttonStyle">Loading buffer...</button>
  <button @click="start" v-if="isLoaded && !isPlaying" :class="buttonStyle">Play</button>
  <button @click="stop" v-if="isLoaded && isPlaying" :class="buttonStyle">Stop</button>
  <VueAudioMotionAnalyzer :options="options" :source="tonePlayer" />
  <OptionsComponent :modelValue="options" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import * as Tone from 'tone'
import OptionsComponent from './OptionsComponent.vue'
import type { Options } from 'vue-audiomotion-analyzer'
import { DefaultOptions } from 'vue-audiomotion-analyzer'

const options: Options = reactive({
  ...DefaultOptions,
  mode: 2,
  alphaBars: true,
  height: 400,
})
const tonePlayer = new Tone.Player('/music/RackNomad-MeditativeMelody.mp3').toDestination().sync().start(0)
const isPlaying = ref(false)
const start = () => {
  Tone.start()
  Tone.Transport.start()
  isPlaying.value = true
}
const stop = () => {
  Tone.Transport.stop()
  isPlaying.value = false
}
let isLoaded = ref(false)
async function checkIsBufferLoaded() {
  await Tone.ToneAudioBuffer.loaded()
  isLoaded.value = true
}
checkIsBufferLoaded()
const buttonStyle = 'px-3 py-1 bg-gray-50 font-medium text-sm hover:bg-gray-200 text-black rounded'
</script>

<style scoped>
#audioMotionAnalyzer {
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
