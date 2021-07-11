<template>
    <div class="detail">
        <DetailNav @titleItemClick="titleItemClick" ref="nav"></DetailNav>
        <Scroll class="wrapper" ref="scroll" :probeType="3"  @backTop="backTop">
            <DetailSwiper :topImages="topImages"  @imageLoad="imageLoad"></DetailSwiper>
            <DetailGoodInfo :goodInfo="goodInfo"></DetailGoodInfo>
            <DetailShopInfo :shopInfo="shopInfo" ></DetailShopInfo>
            <DetailGoodShow :detailGoodShow="detailGoodShow" @imageLoad="imageLoad"></DetailGoodShow>
            <DetailParams :shopParams="shopParams" ref="detailParams"></DetailParams>
            <DetailComment :shopComment="shopComment" ref="detailComment"></DetailComment>
            <ShopList :goodsList="shopRecommend" ref="shopList"></ShopList>
        </Scroll>
        <DetailBottomBar @addCart="addCart"></DetailBottomBar>
        <TopBack v-show="isShowBackTop" @click.native="backClick"></TopBack>
    </div>
</template>

<script>
import DetailNav from './childComponents/DetailNav'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailGoodInfo from './childComponents/DetailGoodInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodShow from './childComponents/detailGoodShow'
import DetailParams from './childComponents/DetailParams'
import DetailComment from './childComponents/DetailComment'
import DetailBottomBar from './childComponents/detailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import ShopList from 'components/content/shopList/ShopList'

import { topBackMixin } from 'common/mixin'

import { getDetailData,GoodInfo, ShopInfo, GoodsParam, getDetailRecommendData } from 'network/detail'
export default {
    name: "detail",
    components: {
        DetailNav,
        DetailSwiper,
        DetailGoodInfo,
        DetailShopInfo,
        DetailGoodShow,
        DetailParams,
        DetailComment,
        DetailBottomBar,
        Scroll,
        ShopList
    },
    mixins:[topBackMixin],
    data() {
        return {
            // 请求参数iid
            iid: this.$route.params.iid,
            // 轮播图的数据
            topImages: [],
            // 商品信息
            goodInfo: {},
            // 店铺信息
            shopInfo: {},
            // 商品详细信息
            detailGoodShow: {},
            // 商品参数数据
            shopParams: {},
            // 评论信息
            shopComment: {},
            // 商品推荐数据
            shopRecommend: [],
            // 标题中offsetTop的值
            titlesOffTop: [],
            // 优化滚动
            num: 0
        }
    },
    created() {
        // 发送请求,获取详情数据
        this.getDetailData()
        // 发送请求，获取商品推荐数据
        this.getDetailRecommendData()
    },
    methods: {
        getDetailData() {
            getDetailData(this.iid).then( rs => {
                const data = rs.result
                this.topImages = data.itemInfo.topImages
                this.goodInfo = new GoodInfo(
                    data.itemInfo,
                    data.columns,
                    data.shopInfo.services)
                this.shopInfo = new ShopInfo(data.shopInfo)
                this.detailGoodShow = data.detailInfo
                this.shopParams = new GoodsParam(
                    data.itemParams.info,
                    data.itemParams.rule
                )
                if(data.rate.cRate !== 0) {
                    this.shopComment = data.rate.list[0]
                }
            })
        },
        getDetailRecommendData() {
            getDetailRecommendData().then( res => {
                console.log(res);
                
                if(res.success) {
                    this.shopRecommend = res.data.list
                }
            })
        },
        // 监听轮播图的图片加载，获取到正确的titles中的offsetTop
        imageLoad() {
            this.titlesOffTop = []
            this.titlesOffTop.push(0)
            this.titlesOffTop.push(this.$refs.detailParams.$el.offsetTop)
            this.titlesOffTop.push(this.$refs.detailComment.$el.offsetTop)
            this.titlesOffTop.push(this.$refs.shopList.$el.offsetTop)
            this.titlesOffTop.push(Number.MAX_VALUE)
        },
        // 点击标题
        titleItemClick(index) {
            this.$refs.scroll.scrollTo(0,-this.titlesOffTop[index])
        },
        //随着滚动显示对应的标题
        backTop(position) {
            const positionY = -position.y
            for(let i = 0; i < this.titlesOffTop.length - 1; i++) {
                if(this.num !== i && this.titlesOffTop[i]<positionY && this.titlesOffTop[i+1] >=positionY){
                    this.num = i
                    this.$refs.nav.currentIndex = i
                }
            }
            this.backShowTop(positionY)
        },
        // 加入到购物车
        addCart() {
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goodInfo.title
            product.desc = this.goodInfo.desc
            product.price = this.goodInfo.nowPrice
            product.iid = this.iid
            this.$store.dispatch('addCart',product).then( res => {
                this.$Toast.show(res,2000)
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    position: relative;
    z-index: 10;
    background-color: $color-background;
    height: 100vh;
    .wrapper {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
}

</style>