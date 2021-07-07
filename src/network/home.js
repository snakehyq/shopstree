import { request } from './index'

export function getHomeData(){
    return request({
        url: '/home/multidata'
    })
}
export function getHomeShops(type,page) {
    return request({
        url:'/home/data',
        params: {
            type,
            page
        }
    })
}