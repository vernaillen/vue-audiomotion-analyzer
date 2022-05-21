<script setup lang="ts">
import { ref } from 'vue'
import { GradientOptions, Options } from 'audiomotion-analyzer'

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
const audioEl = ref(null)
</script>

<template>
  <audio ref="audioEl" src="https://icecast2.ufpel.edu.br/live" controls crossorigin="anonymous"></audio>
  <VueAudiomotionAnalyzer :options="options" :gradient="gradientOptions" :input="audioEl" />
</template>

<style scoped></style>
