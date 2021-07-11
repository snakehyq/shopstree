<template>
    <div id="shop-item">
      <div class="item-selector">
        <checkButton @checkBtnClick="checkBtnClick" :value="goodsItem.checked"></checkButton>
      </div>
      <div class="item-img">
        <img :src="goodsItem.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{goodsItem.title}}</div>
        <div class="item-desc">商品描述: {{goodsItem.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{goodsItem.price}}</div>
          <div class="item-count right">x{{goodsItem.count}}</div>
        </div>
      </div>
    </div>
</template>

<script>
import checkButton from "./checkButton";
export default {
  name: "cartListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    checkButton
  },
  methods: {
    checkBtnClick() {
      this.goodsItem.checked = !this.goodsItem.checked;
    }
  }
};
</script>

<style lang="scss" scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    .item-title,
    .item-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
    }
    .info-bottom {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      .item-price {
        color: orangered;
      }
    }
  }
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  }
}
</style>