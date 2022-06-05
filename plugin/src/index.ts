import { App, Plugin } from 'vue'
import VueAudioMotionAnalyzer from './VueAudioMotionAnalyzer.vue'
import type { Options, GradientOptions } from 'audiomotion-analyzer'
import DefaultOptions from './defaults'

const VueAudioMotionAnalyzerPlugin: Plugin = {
  install(app: App) {
    app.component('VueAudioMotionAnalyzer', VueAudioMotionAnalyzer)
  },
}
export default VueAudioMotionAnalyzerPlugin
export { VueAudioMotionAnalyzer, Options, GradientOptions, DefaultOptions }
