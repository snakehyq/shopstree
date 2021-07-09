<template>
    <Navbar bgColor="#ff8198">
        <div slot="nav-center">购物车({{ cartLength }})</div>
    </Navbar>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import { mapGetters } from 'vuex'
export default {
    name: "cartNav",
    components: {
        Navbar
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['cartLength'])
    }
}
</script>

<style lang="scss" scoped>

</style>