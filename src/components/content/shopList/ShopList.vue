<template>
    <div class="shop-list">
       <ShopItem v-for="(item, index) in goodsList" :key="index" :goodsItem="item"></ShopItem>
    </div>
</template>

<script>
import ShopItem from './ShopItem'
export default {
    name: "shopList",
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        ShopItem
    }
}
</script>

<style lang="scss" scoped>
.shop-list {
    display: flex;
    // justify-content:space-around;
    flex-wrap: wrap;
    padding: 4px;
    & .shop-item:nth-child(even){
        margin-left: 4px;
    }
}
</style>
