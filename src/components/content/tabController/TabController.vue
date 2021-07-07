<template>
    <div class="tab-controller">
        <div class="tab-item"  v-for="(item, index) in titles" :key="index" @click="tabClick(index)">
            <span class="itme-text" :class="{'tab-active': currentIndex === index}">{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabController",
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-controller {
    display: flex;
    height: 40px;
    line-height: 44px;
    font-size: 15px;
    text-align: center;
     background-color: $color-background;
    .tab-item {
        flex: 1;
        .itme-text {
            padding: 5px;
        }
    }
    .tab-active {
        color: $color-high-text;
        border-bottom: 3px solid $color-high-text;
    }
}
</style>