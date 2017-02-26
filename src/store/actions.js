//import 数据 from ''	这样做的原因是便于维护，我可以很容易的就看见有哪些状态或者数据在被监听。
import * as types from './type'
// ES6语法，types是一个对象。

export default{
//在actions里面执行操作，然后提交一个mutation，唤醒mutation来执行。

    /*头部信息*/
    hideHeader:({commit})=>{
        commit(types.HEAD_SHOW_FAIL);
    },
    showHeader:({commit})=>{
        commit(types.HEAD_SHOW_SUCCESS);
    },
    /*loading*/
    hideLoading:({commit})=>{
        commit(types.HIDE_LOADING)
    },
    showLoading:({commit})=>{
        commit(types.SHOW_LOADING)
    },
    /*底部条*/
    hideFooter:({commit})=>{
        commit(types.FOOTER_HIDE);
    },
    showFooter:({commit})=>{
        commit(types.FOOTER_SHOW)
    },


    /*
     上面的代码就是下面这个，用了ES6的参数解构。

     hideFooter:(context)=>{  //context是一个与 store 实例具有相同方法和属性的对象。
     //console.log(context);
     context.commit(types.FOOTER_HIDE);
     }, */
    }

