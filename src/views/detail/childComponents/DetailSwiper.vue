<template>
    <Swiper class="detail-swiper">
        <SwiperItem v-for="(item, index) in topImages" :key="index">
            <img :src="item" alt="" @load="imageLoad">
        </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: "detailSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            length: 0,
            count: 1
        }
    },

    methods: {
        imageLoad() {
            if(this.count++ == this.length) {
                this.$emit('imageLoad')
            }
        }
    },
    watch: {
        topImages() {
            this.length = this.topImages.length
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
}
</style>