<script setup lang="ts">
import { ref } from 'vue'
import { Options } from 'audiomotion-analyzer'
import * as Tone from 'tone'

const tonePlayer = new Tone.Player('/music/RackNomad-MeditativeMelody.mp3').toDestination().sync().start(0)
const options: Options = {
  mode: 2,
  height: 200,
}
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
  <br />
  <VueAudiomotionAnalyzer :options="options" :input="tonePlayer" />
</template>

<style scoped></style>
