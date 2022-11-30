<template>
    <main>
        <audio id="audio" ref="audioRef" src="https://ice2.somafm.com/beatblender-128-mp3" crossorigin="anonymous" />
        <div>
            <NButton v-if="!isPlaying" @click="audio?.play()">
                Play
            </NButton>
            <NButton v-if="isPlaying" @click="audio?.pause()">
                Pause
            </NButton>
            <br>
            Live stream:
            <a href="https://somafm.com/beatblender/" rel="noopener" target="_blank">Soma FM Beat Blender</a>
            <p><br /></p>
        </div>
        <VueAudioMotionAnalyzer :options="options" :source="audio" />
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audio = ref<HTMLMediaElement>()
const isPlaying = ref(false)
onMounted(() => {
    audio.value = document.getElementById('audio') as HTMLMediaElement
    audio.value.onplaying = () => {
        isPlaying.value = true
    }
    audio.value.onpause = () => {
        isPlaying.value = false
    }
})
const options = {
    mode: 5,
    barSpace: 0.25,
    gradient: 'rainbow',
    ledBars: false,
    lumiBars: false,
    radial: false,
    reflexAlpha: 0.25,
    reflexBright: 1,
    reflexFit: true,
    reflexRatio: 0.3,
    showBgColor: false,
    showPeaks: true,
    overlay: false,
}
</script>