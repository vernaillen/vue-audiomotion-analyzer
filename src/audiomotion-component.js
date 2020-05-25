
export default (audioMotion) => {
    return {
        props: {
        },
        render (h) {
            return h('test render', null, null)
        },
        data () {
            return {
                el: null
            }
        },
        mounted () {
            console.log('mounted AudioMotionComponent')
            this.el = this.$el
        },
        beforeDestroy () {
        },
        methods: {
        }
    }
}
