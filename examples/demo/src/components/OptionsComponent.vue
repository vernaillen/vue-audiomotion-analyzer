<script setup lang="ts">
import { ref } from 'vue'
import { useOptionsStore } from '@/stores/options'
import RangeSelector from '@/components/RangeSelector.vue'
import PresetSelector from '@/components/PresetSelector.vue'
import ModeSelector from '@/components/ModeSelector.vue'

const optionsStore = useOptionsStore()
const options = ref(optionsStore.options)

const toggle = (event: Event) => {
  optionsStore.options[event.target.innerText]
    = !optionsStore.options[event.target.innerText]
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
        <button v-btnClass="options.alphaBars" @click="toggle">
          alphaBars
        </button>
        <button v-btnClass="options.ledBars" @click="toggle">
          ledBars
        </button>
        <button v-btnClass="options.loRes" @click="toggle">
          loRes
        </button>
        <button v-btnClass="options.lumiBars" @click="toggle">
          lumiBars
        </button>
        <button v-btnClass="options.outlineBars" @click="toggle">
          outlineBars
        </button>
        <button v-btnClass="options.showBgColor" @click="toggle">
          showBgColor
        </button>
        <button v-btnClass="options.showFPS" @click="toggle">
          showFPS
        </button>
        <button v-btnClass="options.showPeaks" @click="toggle">
          showPeaks
        </button>
        <button v-btnClass="options.showScaleX" @click="toggle">
          showScaleX
        </button>
        <button v-btnClass="options.showScaleY" @click="toggle">
          showScaleY
        </button>
        <button v-btnClass="options.splitGradient" @click="toggle">
          splitGradient
        </button>
        <button v-btnClass="options.stereo" @click="toggle">
          stereo
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
        <button v-btnClass="options.radial" @click="toggle">
          radial
        </button>
        <RangeSelector option="spinSpeed" min="-5" max="5" step="1" />
      </div>
    </div>
  </div>
</template>
