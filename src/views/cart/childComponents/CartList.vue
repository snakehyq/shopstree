<template>
    <div class="cartList">
        <Scroll class="wrapper">
            <CartItem v-for="(item, index) in cartList" :key="index" :goodsItem="item"></CartItem>
        </Scroll>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'

import Scroll from "components/common/scroll/Scroll"

import { mapGetters } from 'vuex'
export default {
    name: "cartList",
    components: {
        CartItem,
        Scroll
    },
    computed: {
        ...mapGetters(['cartList'])
    }
}
</script>

<style lang="scss" scoped>
.cartList {
    height: calc(100vh - 44px - 49px - 40px);
    .wrapper {
        height: 100%;
    }
}
</style>