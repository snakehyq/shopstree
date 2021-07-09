import {
    ADD_COUNT,
    ADD_CART
} from './mutations_type'
export  default {
    [ADD_CART] (state,product) {
        product.count = 1
        product.checked = false
        state.CartList.push(product)
    },
    [ADD_COUNT] (state,newProduct) {
        // 数量加一
        newProduct.count++
    }
}