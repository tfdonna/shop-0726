// 1.引入 axios
import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
//引入 cookie
import { getCookie } from '@/utils/support.js';
//引入了vuex
import store from '../store/index.js';

const apiurl = process.env.VUE_APP_API_URL    //生产环境    开发环境  
console.log(apiurl);
console.log(process.env.NODE_ENV);   //看一下是哪种环境

// 2.创建 axios 实例
const service = axios.create({
    // 3.配置
    //baseURL  后三个字母是大写
    baseURL: apiurl + '/index/Api',
    //baseURL: "http://www.yinruifang.cn/index/Api",  //请求的基础路径

    timeout: 60 * 1000 //请求的超时时间
})


// 4.请求拦截
service.interceptors.request.use(
    config => {
        //设置 token
        config.headers.Authorization = getCookie('token');//token  代表从后台传过来的token的令牌
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

// 5.响应拦截
service.interceptors.response.use(
    res => {
        //console.log(res);
        const data = res.data;
        //如果后台返回的报错码和报错信息的话
        if (data.status !== 200) {
            //有可能 报错  等于 401  ,token 出错，  需要让用户重新登录
            //强制退出的功能
            if (data.status == 401) {
                MessageBox.confirm('您的token出错，您是留在这个页面上还是重新登录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {//点击确认按钮
                    //退出登录，刷新页面
                    store.dispatch('LOGOUT_AC');
                    //重新刷新页面
                    location.reload();

                }).catch(() => {
                    console.log("在原页面");
                });
            } else {
                Message({
                    type: "error",
                    message: data.msg,
                    duration: 2000
                })
            }

        } else {
            return data;
        }
    },
    err => {
        console.log(err);
        Message({
            type: "error",
            message: err,
            duration: 2000
        })
    }
)

// 6.导出
export default service;