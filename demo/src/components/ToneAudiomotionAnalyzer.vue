<script setup lang="ts">
import { ref, reactive } from 'vue'
import * as Tone from 'tone'
import OptionsComponent from './OptionsComponent.vue'
import { Options } from 'audiomotion-analyzer'

const options: Options = reactive({
  mode: 1,
  height: 300,
  showScale: false,
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
  <br />
  <OptionsComponent :modelValue="options" />
  <VueAudiomotionAnalyzer :modelValue="options" :input="tonePlayer" />
  {{ options }}<br />
  <button @click="options.mode = options.mode + 1">{{ options.mode }}</button>
</template>

<style scoped></style>
