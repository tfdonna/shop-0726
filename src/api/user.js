import request from '../utils/request.js';

export function Login(data){
    return request({
        url: 'login',
        method: 'POST',
        data: data
    })
}