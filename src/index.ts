import { App, Plugin } from 'vue'
import VueAudiomotionAnalyzer from './vue-audiomotion-analyzer'

const VueAudiomotionAnalyzerPlugin: Plugin = {
  install(app: App) {
    app.component('VueAudiomotionAnalyzer', VueAudiomotionAnalyzer)
  },
}
export default VueAudiomotionAnalyzerPlugin
export { VueAudiomotionAnalyzer }
