<template>
    <Navbar id="navber" bgColor="#fff">
        <div slot="nav-left" @click="backFormerClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="nav-center" class="nav-center">
            <div :class="{'active': currentIndex === index }" v-for="(item, index) in titles" :key="index" @click="titleItemClick(index)">
                {{ item }}
            </div>
        </div>
    </Navbar>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
export default {
    name: "detailNav",
    components: {
        Navbar
    },
    data() {
        return {
            // 标题数据
            titles: ['商品','参数','评论','推荐'],
            // 保存标题下标
            currentIndex: 0,
        }
    },
    methods: {
        titleItemClick(index){
            this.currentIndex = index
            this.$emit('titleItemClick',index)
        },
        // 返回上一个界面
        backFormerClick() {
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
#navber {
    color: $color-text;
    font-size: 12px;
    .nav-left img {     
        margin-top: -2px;
        vertical-align: middle;
        width: 17px;
        height: 17px;
    }
    .nav-center {
        display: flex;
        justify-content:space-around;
    }
    .active {
        color:$color-high-text;
    }
}
</style>