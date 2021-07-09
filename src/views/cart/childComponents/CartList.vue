<template>
    <div class="cartList">
        <Scroll class="wrapper">
            <CartItem v-for="(item, index) in cartList" :key="index" :goodsItem="item"></CartItem>
        </Scroll>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'

import Scroll from "components/common/Scroll/Scroll"

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
    height: calc(100% - 44px - 58px - 44px);
    .wrapper {
        height: 100%;
        overflow: hidden;
    }
}
</style>