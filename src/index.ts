import { App } from 'vue'
import VueAudiomotionAnalyzerComponent from './VueAudiomotionAnalyzer.vue'

export declare interface VueAudiomotionAnalyzerPlugin {
  install(app: App): void
}
const VueAudiomotionAnalyzer: VueAudiomotionAnalyzerPlugin = {
  install(app) {
    app.component('vue-audiomotion-analyzer', VueAudiomotionAnalyzerComponent)
  },
}

export default VueAudiomotionAnalyzer
