<template>
    <div id="cart">
        <CartNav></CartNav>
        <CartList></CartList>
        <CartBottom></CartBottom>
    </div>
</template>

<script>
import CartNav from './childComponents/CartNav'
import CartList from './childComponents/CartList'
import CartBottom from './childComponents/CartBottom'

export default {
    name: "cart",
    components: {
        CartNav,
        CartList,
        CartBottom
    }
}
</script>

<style lang="scss" scoped>
#cart {
    height: 100vh;
    position: relative;
}
</style>