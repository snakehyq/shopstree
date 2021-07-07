<template>
    <div id="home">
        <Navbar  class="home-navbar"> <div slot="nav-center">购物街</div></Navbar>
        <TabController :titles="titles"
                        class="tab"
                        v-show="isShowTabController"
                        @tabClick="tabClick"
                        ref="outTabContro"></TabController>
        <Scroll class="wrapper" :probeType="3" :pullUpLoad="true" @backTop="backTop" ref="scroll" @upLoadMore="upLoadMore">
            <HomeSwiper :banner="banner" @loadImage="loadImage"></HomeSwiper>
            <HomeRecommend :recommend="recommend"></HomeRecommend>
            <HomePopular></HomePopular>
            <TabController :titles="titles" @tabClick="tabClick" ref="IntabContro"></TabController>
            <ShopList :goodsItem="goodsTypeList"></ShopList>
        </Scroll>
        <TopBack v-show="showTopBack" @click.native="backToTop"></TopBack>
    </div>
</template>

<script>

import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from './childComponents/HomeRecommend'
import HomePopular from './childComponents/HomePopular'

import Navbar from 'components/common/navbar/Navbar'
import TabController from 'components/content/tabController/TabController'
import ShopList from 'components/content/shopList/ShopList'
import Scroll from 'components/common/scroll/Scroll'
import TopBack from 'components/content/topBack/TopBack'

import { distance } from 'common/const.js'

// 导入home的请求
import { getHomeData, getHomeShops } from 'network/home'
export default {
    name: "home",
    components: {
        HomeSwiper,
        HomeRecommend,
        HomePopular,
        Navbar,
        TabController,
        ShopList,
        Scroll,
        TopBack
    },
    data() {
        return {
            //轮播图数据
            banner:[],
            // 推荐数据
            recommend: [],
            // tabContoller的选项数据
            titles: ['流行','新款','精选'],
            // 保存tabController的数据
            goods: {
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            // 保存goods的键值
            goodsTypeKey: 'pop',
            // topBack的显示隐藏
            showTopBack: false,
            // 保存tabController的offsetTop的值
            tabOffTop: 0,
            // 控制内部的tabController的显示和隐藏
            isShowTabController: false,
            // 保存之前原界面的位置
            stayPosition: 0
            }
    },
    computed: {
        goodsTypeList() {
            return this.goods[this.goodsTypeKey].list
        }
    },
    // 发送请求
    created(){
        // 获取到首页的请求数据
        this.getHomeData()
        // 获取到首页商品数据
        this.getHomeShops('pop')
        this.getHomeShops('new')
        this.getHomeShops('sell')
    },
    methods: {
        getHomeData() {
            getHomeData().then( res => {
                if(res.success) {
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                }
            })
        },
        getHomeShops(type) {
            const page = this.goods[type].page + 1
            getHomeShops(type,page).then(res => {
                if(res.success){
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += res.data.page  
                }
            })
        },
        tabClick(index ){
            switch(index) {
                case 0: this.goodsTypeKey = 'pop'
                break;
                case 1: this.goodsTypeKey = 'new'
                break;
                case 2: this.goodsTypeKey = 'sell'
            }
            this.$refs.IntabContro.currentIndex = index
            this.$refs.outTabContro.currentIndex = index
        },
        backTop(position) {
            this.showTopBack = -position.y > distance
            this.isShowTabController = -position.y >= this.tabOffTop
        },
        // 回到顶部
        backToTop(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        //上拉加载商品数据
        upLoadMore() {
            this.getHomeShops(this.goodsTypeKey)
        },
        // 轮播图滚动的图片加载
        loadImage() {
            this.tabOffTop = this.$refs.IntabContro.$el.offsetTop
        }
    },
    activated() {
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,this.stayPosition,0)
    },
    deactivated(){
        this.stayPosition = this.$refs.scroll.getScrollY()
    }
}
</script>

<style lang="scss" scoped>
#home {
    height: 100vh;
    position: relative;
    .wrapper {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
    .tab {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
} 
</style>