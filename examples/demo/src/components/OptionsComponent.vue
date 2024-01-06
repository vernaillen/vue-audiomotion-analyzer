<script setup lang="ts">
import { ref } from 'vue'
import { useOptionsStore } from '@/stores/options'
import RangeSelector from '@/components/RangeSelector.vue'
import PresetSelector from '@/components/PresetSelector.vue'
import ModeSelector from '@/components/ModeSelector.vue'
import type { Options } from 'vite-plugin-vue-audiomotion'

const optionsStore = useOptionsStore()
const options = ref(optionsStore.options)

function toggle(event: Event) {
  if (event && event.target) {
    const target: HTMLButtonElement = event.target as HTMLButtonElement
    optionsStore.toggleBoolean(target.innerText as keyof Options)
  }
}
</script> 

<template>
  <div class="green mt-2">
    Load a preset:
  </div>
  <div class="pl-5">
    <PresetSelector />
  </div>
  <div class="green mt-5">
    Options:
  </div>
  <div class="pl-5">
    <ModeSelector />
    <div class="green mt-5 mb-2">
      <label>Channel layout:</label>
      <select v-model="optionsStore.options.channelLayout" class="text-gray-800 pl-2 mx-2 mb-3">
        <option value="single">Single</option>
        <option value="dual-vertical">Vertical</option>
        <option value="dual-horizontal">Horizontal</option>
        <option value="dual-combined">Combined</option>
      </select>
      <label>Gradient:</label>
      <select v-model="optionsStore.options.gradient" class="text-gray-800 pl-2 mx-2 mb-3">
        <option value="classic">Classic</option>
        <option value="rainbow">Rainbow</option>
        <option value="prism">Prism</option>
      </select>
    </div>
    <div>
      <div class="green pr-2">
        Common:
      </div>
      <div class="pl-5">
        <RangeSelector option="barSpace" min="0" max="0.9" step="0.1" />
        <RangeSelector option="mirror" min="-1" max="1" step="1" />
        <RangeSelector option="smoothing" min="0" max="0.9" step="0.1" />
        <RangeSelector option="volume" min="0" max="1" step="0.1" />
        <br>       
        <button v-btnClass="optionsStore.options.alphaBars" @click="toggle">
          alphaBars
        </button>
        <button v-btnClass="optionsStore.options.ledBars" @click="toggle">
          ledBars
        </button>
        <button v-btnClass="optionsStore.options.loRes" @click="toggle">
          loRes
        </button>
        <button v-btnClass="options.lumiBars" @click="toggle">
          lumiBars
        </button>
        <button v-btnClass="optionsStore.options.outlineBars" @click="toggle">
          outlineBars
        </button>
        <button v-btnClass="optionsStore.options.showBgColor" @click="toggle">
          showBgColor
        </button>
        <button v-btnClass="optionsStore.options.showFPS" @click="toggle">
          showFPS
        </button>
        <button v-btnClass="optionsStore.options.showPeaks" @click="toggle">
          showPeaks
        </button>
        <button v-btnClass="optionsStore.options.showScaleX" @click="toggle">
        showScaleX
        </button>
        <button v-btnClass="optionsStore.options.showScaleY" @click="toggle">
          showScaleY
        </button>
        <button v-btnClass="optionsStore.options.splitGradient" @click="toggle">
          splitGradient
      </button>
      </div>
    </div>
    <div>
      <div class="green mt-5 mb-2">
        Mode 10 / outlineBars:
      </div>
      <div class="pl-5">
        <RangeSelector option="lineWidth" min="0" max="5" step="1" />
        <RangeSelector option="fillAlpha" min="0" max="1" step="0.1" />
      </div>
    </div>
    <div>
      <div class="green mt-5 mb-2">
        Radial effect:
      </div>
      <div class="pl-5">
        <button v-btnClass="optionsStore.options.radial" @click="toggle">
          radial
        </button>
        <RangeSelector option="spinSpeed" min="-5" max="5" step="1" />
      </div>
    </div>
  </div>
</template>
