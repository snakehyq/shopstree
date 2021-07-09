import {
    ADD_COUNT,
    ADD_CART
} from './mutations_type'
export default {
    addCart(context,product) {
        let newProduct = null
        newProduct = context.state.CartList.find( item => item.iid === product.iid)
        if(newProduct) {
            context.commit(ADD_COUNT,newProduct)
        }else {
            context.commit(ADD_CART,product)
        }
    }
}