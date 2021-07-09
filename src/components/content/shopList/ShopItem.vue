<template>
     <div class="shop-item" @click="itemClick(goodsItem.iid)">
        <img  :src="shoImage" alt="">
        <div class="item-info">
            <p>{{ goodsItem.title }}</p>
            <span class="price">￥{{ goodsItem.price }}</span>
            <span class="cfav">{{ goodsItem.cfav }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "shopItem",
    props: {
        goodsItem: {
            type: Object,
            default() {
                return 
            }
        }
    },
    computed: {
        shoImage() {
            return this.goodsItem.show? this.goodsItem.show.img:this.goodsItem.image
        }
    },
    methods: {
        itemClick(iid) {
            this.$router.push('/detail/'+ iid)
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>