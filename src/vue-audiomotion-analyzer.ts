import { defineComponent, h, PropType, ref, watch } from 'vue'
import AudioMotionAnalyzer, { Options, GradientOptions } from 'audiomotion-analyzer'

export default defineComponent({
  props: {
    modelValue: { type: Object as PropType<Options>, required: false },
    gradient: { type: Object as PropType<GradientOptions>, required: false },
    input: { type: Object as PropType<HTMLMediaElement | AudioNode>, required: false },
    audioCtx: { type: Object as PropType<AudioContext>, required: false },
  },
  mounted() {
    try {
      const allOptions = { audioCtx: this.audioCtx, source: this.input, ...this.modelValue }
      this.audioMotionanalyzer = new AudioMotionAnalyzer(this.divElement.el, allOptions)
      if (this.gradient) {
        this.audioMotionanalyzer.registerGradient('custom-gradient', this.gradient)
        this.audioMotionanalyzer.setOptions({ gradient: 'custom-gradient' })
      }
    } catch (e) {
      console.error('error mounting VueAudiomotionAnalyzer: ', e)
    }
  },
  updated() {
    console.log('updated')
    const allOptions = { audioCtx: this.audioCtx, source: this.input, ...this.modelValue }
    console.log(allOptions)
    this.audioMotionanalyze.setOptions(allOptions)
    console.log('modelValue:')
    console.log(this.modelValue)
  },
  setup(props) {
    console.log(props)

    const divElement = h('div', { id: 'audioMotionAnalyzer' })
    const audioMotionanalyzer: AudioMotionAnalyzer = null

    const options = ref(props.modelValue)
    watch(options, newOptions => {
      console.log('options changed!')
      if (audioMotionanalyzer) audioMotionanalyzer.setOptions(newOptions)
    })
    return { divElement, audioMotionanalyzer }
  },
  render() {
    return this.divElement
  },
})
