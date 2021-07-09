import { request } from './index'

export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 获取商品推荐数据
export function getDetailRecommendData(){
    return request({
        url: '/recommend'
    })
}
// 商品数据
export class GoodInfo {
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor= itemInfo.discountBgColor
        this.desc = itemInfo.desc
        this.columns = columns
        this.services = services
        this.nowPrice = itemInfo.lowNowPrice;
    }
}
// 店铺信息
  export class ShopInfo {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }

  
// 商品参数数据
export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
  