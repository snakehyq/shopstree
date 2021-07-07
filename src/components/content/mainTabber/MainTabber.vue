<template>
    <Tabber>
      <TabberItem path="/home" color="black" activeColor="red">
          <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">首页</div>
      </TabberItem>
      <TabberItem  path="/category" color="black" activeColor="red">
          <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </TabberItem>
      <TabberItem  path="/cart" color="black" activeColor="red">
          <img slot="item-active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabberItem>
      <TabberItem  path="/profile" color="black" activeColor="red">
          <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <div slot="item-text">个人中心</div>
      </TabberItem>
    </Tabber>
</template>

<script>

import Tabber from  'components/common/tabber/Tabber'
import TabberItem from 'components/common/tabber/TabberItem'
export default {
    name: "main-tabber",
    components: {
        Tabber,
        TabberItem
    }
}
</script>

<style lang="scss" scoped>

</style>