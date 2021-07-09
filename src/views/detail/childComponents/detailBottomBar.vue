<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style scoped lang="scss">
.bottom-bar {
  height: 58px;
  position: fixed;
  background-color: $color-background;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  .bar-item {
    flex: 1;
    display: flex;
    & > div {
      flex: 1;
    }
  }
  .bar-left {
    .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 10px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .text {
      font-size: 13px;
    }
    .service {
      background-position: 0 -54px;
    }
    .shop {
      background-position: 0 -98px;
    }
  }  
  .bar-right {
    font-size: 15px;
    color:var(--color-background);
    line-height: 58px;
    .cart {
    background-color: #ffe817;
    color: #333;
    }
    .buy {
      background-color: #f69;
    }
  }

}
</style>