<script setup lang="ts">
import { onMounted, ref } from "vue";

const audio = ref<HTMLElement | null>();
onMounted(() => {
  const audioElement = document.getElementById("audio");
  if (typeof audioElement == HTMLMediaElement.name) {
    audio.value = audioElement;
  }
});
</script>

<template>
  <audio
    id="audio"
    ref="audioRef"
    src="https://23613.live.streamtheworld.com/TOPZEN_SC"
    controls
    crossorigin="anonymous"
  ></audio>
  <div>
    Live stream:
    <a
      href="https://www.topradio.be/playlist/topzen"
      rel="noopener"
      target="_blank"
      >Zen FM</a
    >
  </div>
  <VueAudioMotionAnalyzer :source="audio" />
</template>

<style scoped>
#audio,
#vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
