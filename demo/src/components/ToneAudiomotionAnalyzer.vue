<script setup lang="ts">
import { ref, reactive } from 'vue'
import * as Tone from 'tone'
import OptionsComponent from './OptionsComponent.vue'
import type { Options } from 'vue-audiomotion-analyzer'
import { DefaultOptions } from 'vue-audiomotion-analyzer'

const options: Options = reactive({
  ...DefaultOptions,
})

const tonePlayer = new Tone.Player('/music/RackNomad-MeditativeMelody.mp3').toDestination().sync().start(0)

const start = () => {
  Tone.start()
  Tone.Transport.start()
}
const stop = () => {
  Tone.Transport.stop()
}
let isLoaded = ref(false)
async function checkIsBufferLoaded() {
  await Tone.ToneAudioBuffer.loaded()
  isLoaded.value = true
}
checkIsBufferLoaded()
</script>

<template>
  <span v-if="!isLoaded">Loading buffer...</span>
  <button @click="start" v-if="isLoaded">Play</button>
  <button @click="stop" v-if="isLoaded">Stop</button>

  <VueAudioMotionAnalyzer :options="options" :source="tonePlayer" />
  <OptionsComponent :modelValue="options" />
</template>

<style scoped>
#audioMotionAnalyzer {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
