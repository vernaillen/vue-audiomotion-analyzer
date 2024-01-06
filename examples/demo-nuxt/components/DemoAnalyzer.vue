<template>
    <main class="mt-10">
        <audio id="audio" ref="audioRef" src="https://ice2.somafm.com/beatblender-128-mp3" crossorigin="anonymous" />
        <div class="mb-5">
            <UButton v-if="!isPlaying" icon="i-heroicons-play" @click="audio?.play()">Play</UButton>
            <UButton v-if="isPlaying" icon="i-heroicons-pause" @click="audio?.pause()">Pause</UButton>
            <span class=" ml-4">
                stream: <ULink 
                    to="https://somafm.com/beatblender/" 
                    class="text-sm/6 hover:text-primary relative"
                    rel="noopener" target="_blank">
                    Soma FM Beat Blender
                    <UIcon class="i-heroicons-arrow-up-right-20-solid w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500" name="i-heroicons-arrow-up-right-20-solid" />
                </ULink>
            </span>
        </div>
        <VueAudioMotionAnalyzer :options="options" :source="audio" />
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { VueAudioMotionAnalyzer } from 'vite-plugin-vue-audiomotion'

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