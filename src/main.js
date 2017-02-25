import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routerConfig from './router-config'
import axios from 'axios'
import filters from './filters'
import stores from './store/store'
Vue.use(vueRouter)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
/*
以上ES6语法为：
  1.Object.keys得到对象fillter内的每个属性名组成的数组；
  2.forEach其中每个数组元素执行一次后面的函数；
  3. 后面的函数为：
Vue.filter(key, function (key) {  //key:normalTime
    return Vue.filter(key, filters[key])   //这里的filters[key]就是导出的函数
})
*/

//创建router实例
const router =new vueRouter({
    routes:routerConfig
})

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//在发送请求前拦截，触发loading效果。
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    //stores.dispatch('showLoading')
    return config; //不一定返回
}, function (error) {
    return Promise.reject(error);
});

//请求回来时，loading取消。事件状态由Vuex管理
axios.interceptors.response.use(function (response) { //配置请求回来的信息
   // stores.dispatch('hideLoading')
    return response;
}, function (error) {

    return Promise.reject(error);
});

//其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios

new Vue({
    el: '#app',
    store: stores,
    router,  //ES6语法
    render: h => h(App)
})

