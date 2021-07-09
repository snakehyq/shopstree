<template>
    <div v-if="Object.keys(goodInfo).length !== 0" class="detailGoodInfo">
        <p class="title">{{ goodInfo.title }}</p>
        <div class="good-price">
            <span class="new-price">{{ goodInfo.newPrice }}</span>
            <span class="old-price">{{ goodInfo.oldPrice }}</span>
            <span class="discount" :style="{'background-color': goodInfo.discountBgColor}">{{ goodInfo.discountDesc }}</span>
        </div>
        <div class="good-mess">
            <span>{{ goodInfo.columns[0] }}</span>
            <span>{{ goodInfo.columns[1] }}</span>
            <span>{{ goodInfo.services[goodInfo.services.length-1].name}}</span>
        </div>
         <div class="info-service">
            <span class="info-service-item" v-for="index in goodInfo.services.length-1" :key="index">
                <img :src="goodInfo.services[index-1].icon" alt />
                <span>{{goodInfo.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "detailGoodInfo",
    props: {
        goodInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.detailGoodInfo {
    margin-top: 15px;
    padding: 0px 8px;
    color: $color-text;
    .title {
        color:#222;
    }
    .good-price {
        margin: 10px 0px;
        .new-price {
            font-size: 24px;
            color: $color-high-text;
        }
        .old-price {
            font-size: 13px;
            text-decoration:line-through;
            margin: 0px 15px;
        }
        .discount {
            color: $color-background;
            font-size: 12px;
            border-radius: 8px;
            padding: 2px 5px;
        }
    }
    .good-mess {
        line-height: 30px;
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        justify-content: space-between;
    }
    .info-service {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .info-service-item img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }
    .info-service-item span {
        font-size: 13px;
        color: #333;
    }
}
</style>