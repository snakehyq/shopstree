<template>
    <div id="navber" :style="{'background': bgColor}">
        <div class="nav-left"><slot name="nav-left"></slot></div>
        <div class="nav-center"><slot name="nav-center"></slot></div>
        <div class="nav-right"><slot name="nav-right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "navber",
    props: {
        bgColor: {
            type: String,
            default: '#fff'
        }
    }
}
</script>

<style lang="scss" scoped>
#navber {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: $color-tint;
    color: #fff;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    .nav-left, .nav-right {
        width: 60px;
    }
    .nav-center {
        flex: 1;
    }
}

</style>