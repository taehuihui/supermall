import axios from 'axios'

// ❓网络，发送请求这部分还得学习
export function request(config) {
    //   创建axios实例
    const instance = axios.create({
        // baeseURL大小写必须一致
        baseURL: 'http://152.136.185.210:8000/api/w6',
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