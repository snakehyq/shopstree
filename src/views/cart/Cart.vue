<template>
    <div id="cart">
        <CartNav></CartNav>
    </div>
</template>

<script>
import CartNav from './childComponents/CartNav'
export default {
    name: "cart",
    components: {
        CartNav
    }
}
</script>

<style lang="scss" scoped>
#cart {
    height: 100vh;
}
</style>