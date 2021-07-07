<template>
   <Swiper>
       <SwiperItem v-for="(item, index) in banner" :key="index">
           <a :href="item.link">
               <img :src="item.image" @load="loadImage" alt="">
           </a>
       </SwiperItem>
   </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
    name: "category",
    props: {
        banner: {
            type: Array,
            default() {
                return []
            },
            // 让图片加载只加载一次
            flag: false
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        loadImage() {
            if(!this.flag) {
                this.$emit('loadImage')
                this.flag = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>