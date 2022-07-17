import { App, Plugin } from 'vue'
import VueAudioMotionAnalyzer from './VueAudioMotionAnalyzer.vue'
import type { Options, GradientOptions } from 'audiomotion-analyzer'
import DefaultOptions from './DefaultOptions'

const VueAudioMotionAnalyzerPlugin: Plugin = {
  install(app: App) {
    app.component('VueAudioMotionAnalyzer', VueAudioMotionAnalyzer)
  },
}
export { VueAudioMotionAnalyzerPlugin, VueAudioMotionAnalyzer, Options, GradientOptions, DefaultOptions }
