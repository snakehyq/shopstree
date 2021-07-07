<template>
    <div class="home-recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "homeRecommend",
    props: {
        recommend: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.home-recommend {
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eee;
    .recommend-item {
        flex: 1;
        color: $color-text;
        img {
            width: 80px;
            height: 80px;
            vertical-align: middle;
            margin-bottom: 13px;
        }
    }
}
.home-recommend {
    flex: 1;
}
</style>