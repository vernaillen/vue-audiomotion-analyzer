<script setup lang="ts">
import { ref } from 'vue'
import { useOptionsStore } from '@/stores/options'

const optionsStore = useOptionsStore()
const options = ref(optionsStore.options)
const modes = [
  {
    id: 0,
    desc: 'Discrete frequencies',
  },
  {
    id: 1,
    desc: '1/24th octave bands',
  },
  {
    id: 2,
    desc: '1/12th octave bands',
  },
  {
    id: 3,
    desc: '1/8th octave bands',
  },
  {
    id: 4,
    desc: '1/6th octave bands',
  },
  {
    id: 5,
    desc: '1/4th octave band',
  },
  {
    id: 6,
    desc: '1/3rd octave bands',
  },
  {
    id: 7,
    desc: 'Half octave bands',
  },
  {
    id: 8,
    desc: 'Full octave bands',
  },
  {
    id: 10,
    desc: 'Line / Area graph',
  },
]
</script>

<template>
  <div class="mt-2">
    <label>mode:</label>
    <select v-model="options.mode" class="text-gray-800 pl-2 mx-2 mb-3">
      <option v-for="mode in modes" :key="mode.id" :value="mode.id">
        {{ mode.id }}: {{ mode.desc }}
      </option>
    </select>
  </div>
</template>
