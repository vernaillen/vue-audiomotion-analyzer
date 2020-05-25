
export default (audioMotion) => {
    return {
        props: {
            audioCtx: {
                type: AudioContext,
                required: true
            }
        },
        render: function (createElement) {
            return createElement('div', '', )
        },
        mounted () {
            this.el = this.$el
            audioMotion.init(this.el, this.audioCtx)
        }
    }
}
