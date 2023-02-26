<template>
    <main id="demoAnalyzer">
        <audio id="audio" ref="audioRef" src="https://ice2.somafm.com/beatblender-128-mp3" crossorigin="anonymous" />
        <div>
            <ButtonLink class="playButton" v-if="!isPlaying" @click="loadRealDemo()">
                Try it!
            </ButtonLink>
            <ButtonLink class="playButton" v-if="isPlaying" @click="audio?.pause()">
                Pause
            </ButtonLink>
            <span>
             (Live stream:
            <a href="https://somafm.com/beatblender/" rel="noopener" target="_blank">Soma FM Beat Blender</a>)
            </span>
        </div>
        <div v-if="useRealDemo">
            <VueAudioMotionAnalyzer :options="options" :source="audio" />
        </div>
        <div v-else>
            <img src="/analyzerscreenreording.gif" alt="animated gif of analyzer">
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueAudioMotionAnalyzer } from 'vite-plugin-vue-audiomotion'

const audio = ref<HTMLMediaElement>()
const isPlaying = ref(false)

const useRealDemo = ref(false)
const loadRealDemo = () => {
    useRealDemo.value = true

    if (!audio.value) {
        audio.value = document.getElementById('audio') as HTMLMediaElement
        audio.value.onplaying = () => {
            isPlaying.value = true
        }
        audio.value.onpause = () => {
            isPlaying.value = false
        }
    }
    console.log('play')
    audio.value.play();
}
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
    height: 250
}
</script>

<style>
#demoAnalyzer {
    min-height: 330px;
}
#vueAudioMotionAnalyzer {
    margin-bottom: 20px;
}
.playButton {
    cursor: pointer;
    width: 90px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>