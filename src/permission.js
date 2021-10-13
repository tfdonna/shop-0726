import router from './router';
import {getCookie} from '@/utils/support.js'
import { Message } from 'element-ui';
import store from './store'

//守卫
/*
beforeEach 里面是一个函数 ，这个函数中有三个参数  to  from   next
*/
/*
登录页不需要守卫，
如果没有登录 ，跳转 登录页
如果已经登录 ，放行
*/

//不需要守卫的页面白名单
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    console.log(to, from);
    if(getCookie('token')){
        if(to.path == '/login'){
            next('/home');
        }else if(to.path == '/super'){
            if(getCookie('roleid') == 1){
                next();
            }else{
                Message({
                    message: '您没有权限访问该页面，请退出后使用超级管理员身份登录',
                    type: 'error',
                    duration: 2000
                })
                store.dispatch('LOGOUT_AC');
                router.go(0);
            }
        }
        else{
            next();
        }
    }else{
        if(whiteList.indexOf(to.path) !== -1){
            next();
        }else {
                next('/login');
            }
    }
})