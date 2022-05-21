import { h } from 'vue'
import AudioMotionAnalyzer from 'audiomotion-analyzer'

export default {
  props: ['options', 'gradient', 'input'],
  data() {
    return {
      divElement: h('div', { id: 'audioMotionAnalyzer' }),
      audioMotionanalyzer: AudioMotionAnalyzer,
    }
  },
  render() {
    console.log('render:')
    return this.divElement
  },
  mounted() {
    console.log('mounted:')
    this.audioMotionanalyzer = new AudioMotionAnalyzer(this.divElement.el as HTMLElement, this.options)
    if (this.gradient) {
      this.audioMotionanalyzer.registerGradient('custom-gradient', this.gradient)
      this.audioMotionanalyzer.setOptions({ gradient: 'custom-gradient' })
    }
  },
  updated() {
    console.log('updated:')
    console.log(this.input)
    if (this.input && this.audioMotionanalyzer) {
      console.log(this.audioMotionanalyzer)
      this.audioMotionanalyzer.connectInput(this.input)
    } else {
      console.log('something is missing')
    }
  },
}
