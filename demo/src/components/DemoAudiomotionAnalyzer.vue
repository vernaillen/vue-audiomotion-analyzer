<script setup lang="ts">
import { ref } from 'vue'
import type { GradientOptions, Options } from 'vue-audiomotion-analyzer'

const options: Options = {
  mode: 2,
  height: 200,
}
const gradientOptions: GradientOptions = {
  bgColor: '#000000',
  colorStops: [
    { pos: 0, color: '#9C8E1B' },
    { pos: 1, color: '#9C8E1B' },
  ],
}
const audio = ref(null)
</script>

<template>
  <audio id="audio" ref="audio" src="https://icecast2.ufpel.edu.br/live" controls crossorigin="anonymous"></audio>
  <VueAudioMotionAnalyzer :options="options" :gradient="gradientOptions" :source="audio" />
</template>

<style scoped></style>
