import { defineComponent, h, PropType } from 'vue'
import AudioMotionAnalyzer, { Options, GradientOptions } from 'audiomotion-analyzer'

export default defineComponent({
  props: {
    options: { type: Object as PropType<Options>, required: false },
    gradient: { type: Object as PropType<GradientOptions>, required: false },
    input: { type: Object as PropType<HTMLMediaElement | AudioNode>, required: false },
    audioCtx: { type: Object as PropType<AudioContext>, required: false },
  },
  data() {
    return {
      divElement: h('div', { id: 'audioMotionAnalyzer' }),
      audioMotionanalyzer: AudioMotionAnalyzer,
    }
  },
  mounted() {
    try {
      const allOptions = { audioCtx: this.audioCtx, source: this.input, ...this.options }
      this.audioMotionanalyzer = new AudioMotionAnalyzer(this.divElement.el, allOptions)
      if (this.gradient) {
        this.audioMotionanalyzer.registerGradient('custom-gradient', this.gradient)
        this.audioMotionanalyzer.setOptions({ gradient: 'custom-gradient' })
      }
    } catch (e) {
      console.error('error mounting VueAudiomotionAnalyzer: ', e)
    }
  },
  render() {
    return this.divElement
  },
})
