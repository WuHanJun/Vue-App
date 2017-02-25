/**
 * Created by lenovo on 2017/2/24.
 */
import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_HIDE,
    FOOTER_SHOW
    } from './type'

//定义初始状态
const state={
    headShow:true,
    loading:false,
    footerShow:true
};

//翻译过来是变化，突变。在这里使得state发生改变。
const mutations={
    /*头部*/
    [HEAD_SHOW_SUCCESS](state){
    state.headShow=true;
},
[HEAD_SHOW_FAIL](state){
    state.headShow=false;
    //console.log(state.headShow);
},
/*loading*/
[HIDE_LOADING](state){
    state.loading=false;
},
[SHOW_LOADING](state){
    state.loading=true;
},
/*footer*/
[FOOTER_HIDE](state){
    state.footerShow=false;
},
[FOOTER_SHOW](state){
    state.footerShow=true;
}
};

//相当于store里面的计算属性
const getters={
    headShow(state){
    return state.headShow;
},
loading(state){
    return state.loading;
},
footerShow(state){
    return state.footerShow;
}
};
//需要导出
export default{
    state,
    mutations,
    getters
}