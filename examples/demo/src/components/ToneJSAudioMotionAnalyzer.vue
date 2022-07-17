<template>
  <button v-if="!isLoaded" :class="buttonStyle">Loading buffer...</button>
  <button @click="start" v-if="isLoaded && !isPlaying" :class="buttonStyle">
    Play
  </button>
  <button @click="stop" v-if="isLoaded && isPlaying" :class="buttonStyle">
    Stop</button
  ><br />
  music by
  <a href="https://www.youtube.com/watch?v=whKBW_hu4nE">Wouter Vernaillen</a
  ><br />
  <VueAudioMotionAnalyzer
    :options="optionsStore.options"
    :source="tonePlayer"
  />
  <OptionsComponent />
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as Tone from "tone";
import OptionsComponent from "@/components/OptionsComponent.vue";
import { useOptionsStore } from "@/stores/options";

const optionsStore = useOptionsStore();

const tonePlayer = new Tone.Player("/music/RackNomad-MeditativeMelody.mp3")
  .toDestination()
  .sync()
  .start(0);
const isPlaying = ref(false);
const start = () => {
  Tone.start();
  Tone.Transport.start();
  isPlaying.value = true;
};
const stop = () => {
  Tone.Transport.stop();
  isPlaying.value = false;
};
const isLoaded = ref(false);
async function checkIsBufferLoaded() {
  await Tone.ToneAudioBuffer.loaded();
  isLoaded.value = true;
}
checkIsBufferLoaded();
const buttonStyle =
  "px-3 py-1 bg-gray-50 font-medium text-sm hover:bg-gray-300 text-black rounded";
</script>

<style scoped lang="css">
#vueAudioMotionAnalyzer {
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
