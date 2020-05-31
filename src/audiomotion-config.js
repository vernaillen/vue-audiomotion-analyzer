import Vue from 'vue/dist/vue'
import AudioMotionConfigDisplay from './AudioMotionConfigDisplay.vue'

export default (audioMotion) => {
    return {
        render(createElement) {
            let base = {
                components: {
                    AudioMotionConfigDisplay
                },
                data () {
                    return {
                        audioMotion : audioMotion,
                    }
                }
            }
            const compiledTemplate = Vue.compile(`<AudioMotionConfigDisplay :audioMotion="audioMotion"/>`);
            let component = Object.assign({}, compiledTemplate, base)
            return createElement(component);
        }
    }
}
