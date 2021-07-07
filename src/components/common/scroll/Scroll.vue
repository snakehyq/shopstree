<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
             type: Boolean,
             default: false
         }
    },
    mounted() {
        this.$nextTick( () => {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                observeDOM:true,
                observeImage:true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            if(this.probeType == 2 || this.probeType === 3) {
                this.scroll.on('scroll',(position) => {
                    this.$emit('backTop',position)
                })
            }
            if(this.pullUpLoad) {
                this.scroll.on('pullingUp',() => {                
                    this.$emit('upLoadMore')
                    this.scroll.finishPullUp()
                })
            }
        })
    },
    methods: {
        // 封装scrollTo
        scrollTo(x, y, time = 300) {
            this.scroll &&this.scroll.scrollTo(x, y, time)
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll?this.scroll.y:0
        }
    }
}
</script>

<style lang="scss" scoped>  

</style>