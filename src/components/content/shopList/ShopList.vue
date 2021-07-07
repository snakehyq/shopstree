<template>
    <div class="shop-list">
        <div class="shop-item" v-for="(item, index) in goodsItem" :key="index">
            <img  :src="item.show.img" alt="">
            <div class="item-info">
                <p>{{ item.title }}</p>
                <span class="price">￥{{ item.price }}</span>
                <span class="cfav">{{ item.cfav }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "shopList",
    props: {
        goodsItem: {
            type: Array,
            default() {
                return []
            }
        }
    },
    created() {
        console.log(this.goodsItem);
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
    .shop-item {
        position: relative;
        width: 49%;
        padding-bottom: 40px;
        img {
            width: 100%;
            border-radius: 3px;
        }
        .item-info {
            text-align: center;
            position: absolute;
            font-size: 12px;
            left: 0;
            right: 0;
            bottom: 5px;
            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 3px;
            }
            .price {
                color: $color-high-text;
                margin-right: 20px;
            }
            .cfav {
                position: relative;
            }
            .cfav::before {
                content: "";
                position: absolute;
                left: -15px;
                top: -1px;
                width: 14px;
                height: 14px;
                background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
            }
        }
    }
}
</style>
