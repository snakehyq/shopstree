<template>
    <div id="tabber">
         <slot></slot>
    </div>
</template>

<script>
export default {
    name: "tabber"
}
</script>

<style scoped lang="scss">
#tabber {
    display: flex;
    background: $color-background;
    justify-content: center;
    align-items: center;
    height: 49px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
}
</style>