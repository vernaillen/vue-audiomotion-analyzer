import AudioMotion from './audiomotion'
import AudioMotionComponent from './audiomotion-component'

const VueAudioMotionAnalyzer = {
    install(Vue, options = {}) {
        const AudioMotionClass = AudioMotion(Vue)
        const audioMotion = new AudioMotionClass(options)

        Vue.component('audioMotionAnalyzer', AudioMotionComponent(audioMotion))
        Vue.prototype.$audioMotion = audioMotion
    }
}

export default VueAudioMotionAnalyzer
