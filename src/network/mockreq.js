import axios from 'axios'
//mock数据
export function mockReq(config) {
    // 创建axios实例
    const instance = axios.create({
        // baeseURL大小写必须一致
        baseURL: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
        timeout: 5000
    })

    // ! axios的拦截器
    // 1、请求拦截
    instance.interceptors.request.use(config => {
        // 请求拦截器用处：
        // console.log(config);
        return config
    }, err => {
        console.log(err)
    })

    // 2、响应拦截
    instance.interceptors.response.use(res => {
        // 响应拦截器用处：
        // console.log(res);
        return res.data
    }, err => {
        console.log(err)
    })

    // 发送真正的网络请求
    return instance(config)
}