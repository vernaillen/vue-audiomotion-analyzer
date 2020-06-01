import AudioMotion from './audiomotion'
import AudioMotionComponent from './audiomotion-component'
import AudioMotionConfig from './audiomotion-config'

const VueAudioMotionAnalyzer = {
    install(Vue, options = {}) {
        const AudioMotionClass = AudioMotion(Vue)
        const audioMotion = new AudioMotionClass(options)

        Vue.component('audioMotionAnalyzer', AudioMotionComponent(audioMotion))
        Vue.component('audioMotionConfig', AudioMotionConfig(audioMotion))
    }
}

export default VueAudioMotionAnalyzer
