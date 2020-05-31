
export default (audioMotion) => {
    return {
        props: {
            options: {
                required: false
            }
        },
        render: function (createElement) {
            return createElement('div',  {
                attrs: {
                    id: 'audioMotionAnalyzer'
                }
            }, )
        },
        mounted () {
            this.el = this.$el
            audioMotion.init(this.el, this.options)
        }
    }
}
