<template>
    <div class="tabber-item"  @click="tabClick">
        <div v-if="isActive"><slot name="item-active-icon"></slot></div>
        <div v-else><slot name="item-icon"></slot></div>
        <div class="item-text" :style="colorStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "tabber-item",
    props: {
        path: {
            type:String,
            default: ''
        },
        activeColor: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        colorStyle(){
            return this.isActive?{'color': this.activeColor}:{'color':this.color}
        }
    },
    methods: {
        tabClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style lang="scss" scoped>
.tabber-item {
    margin-top: 2px;
    flex: 1;
    text-align: center;
    font-size: 14px;
    img {
        width: 22px;
        height: 22px;
        vertical-align: middle;
        margin-bottom: 2px;
        margin-top: 3px;
    }
}
</style>