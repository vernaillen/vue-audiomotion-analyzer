<template>
  <div ref="audioMotionAnalyzer" id="audioMotionAnalyzer" />
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { Options } from 'audiomotion-analyzer'
import audioMotion from './audioMotion'

interface Props {
  options?: Options
  audioCtx?: AudioContext
}
interface Emits {
  analyzer: unknown
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const audioMotionAnalyzer = ref<HTMLDivElement | null>(null)
const renderAudiomotionAnalyzer = () => {
  const extOptions = { audioCtx: props.audioCtx, ...props.options }
  audioMotion.init(audioMotionAnalyzer.value, extOptions)
  emit('analyzer', audioMotion.audioMotionObj._analyzer[0])
}
onMounted(() => renderAudiomotionAnalyzer())
onUpdated(() => renderAudiomotionAnalyzer())
</script>
