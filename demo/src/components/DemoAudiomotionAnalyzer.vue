<script setup lang="ts">
import { ref } from 'vue'

const audio = ref<HTMLMediaElement | null>(null)
const options = {
  mode: 2,
  height: 200,
}
</script>

<template>
  <audio id="audio" ref="audio" src="https://icecast2.ufpel.edu.br/live" controls crossorigin="anonymous"></audio>
  <vue-audiomotion-analyzer :options="options" :mediaElement="audio" />
</template>

<style scoped></style>
