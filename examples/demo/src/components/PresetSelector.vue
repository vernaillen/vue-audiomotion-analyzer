<template>
  <div class="mt-2">
    <button
      v-for="(preset, index) in presets"
      :key="index"
      :value="index"
      v-btnClass="index == selectedPreset"
      @click="setPreset(index)"
    >
      {{ preset.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { DefaultOptions } from "vue-audiomotion-analyzer";
import { useOptionsStore } from "@/stores/options";
import { presets } from "@/presets";

const selectedPreset = ref(4);
const updatedPreset = ref(false);
const optionsStore = useOptionsStore();
const setPreset = (presetId: number) => {
  const newOptions = { ...DefaultOptions, ...presets[presetId].options };
  optionsStore.updateOptions(newOptions);
  selectedPreset.value = presetId;
  updatedPreset.value = true;
};
watch(optionsStore.options, () => {
  if (!updatedPreset.value) selectedPreset.value = -1;
  updatedPreset.value = false;
});
</script>
