
export default class AudioMotionContainer {
    constructor({ el, binding, vnode, audioMotion }) {
        this.audioMotion = audioMotion
        this.el = null
        this.update({ el, binding })
    }

    update ({ el, binding }) {
        this.el = el
        console.log("el: " + el)
    }
}
