import {
    ADD_COUNT,
    ADD_CART
} from './mutations_type'
export default {
    addCart(context,product) {
        return new Promise((resolve, reject) => {     
            let newProduct = null
            newProduct = context.state.CartList.find( item => item.iid === product.iid)
            if(newProduct) {
                context.commit(ADD_COUNT,newProduct)
                resolve('商品数量加一')
            }else {
                context.commit(ADD_CART,product)
                resolve('添加购物车成功')
            }
        })
    }
}