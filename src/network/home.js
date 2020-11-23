// 首页的数据请求

import {request} from './request'

export function getHomeData(){
    // 专属于home组件所需数据的请求
    // request函数,返回一个Promise
    return request({
        url:'/home/multidata'
    })
}

// 这个网址需要传参数
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,page
        }
    })
}