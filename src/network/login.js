import {mockReq} from './mockreq'

export function getLoginCode(phoneNumber){
    return mockReq({
        url:'send_code',
        params:{
            phoneNumber
        }
    })
}

export function phoneLogin(phone,captcha){
    return mockReq({
        url:'login_code',
        params:{
            phone,
            captcha
        },
        method:'POST'
    })
}
