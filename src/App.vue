<template>
    <div id="app">
        <NavHeader v-show="headShow"></NavHeader>
        <loading v-if="loading"></loading>
        <transition  name="slide-down">
                <router-view class="router-view"></router-view>
        </transition>
        <FooterBar v-show="footerShow"></FooterBar>
    </div>
</template>

<script>
    import baseCss from './assets/css/base.css'
    import Css from './assets/css/mydoc.css'
    import iconfont from './assets/font/iconfont.css'
    import NavHeader from './components/NavHeader.vue'
    import FooterBar from './components/FooterBar.vue'
    import Home from './components/Home.vue' //组件在哪里引入的在哪里注册
    import { mapGetters } from 'vuex'

    console.log(mapGetters)
export default {
    name: 'app',
    components:{NavHeader, FooterBar, Home},
    //mapGetters将store中的getters隐映射到局部计算属性
    computed: mapGetters([
            'headShow',
            'loading',
            'footerShow'
        ]),
    created(){  //路由api： https://router.vuejs.org/zh-cn/api/route-object.html
        console.log(this.$route.path.substring(1))
        var path = this.$route.path.substring(1)  //取idx位到最后一位，包括第idx位。
        this.headerChange(path);
        this.footerChange(path);
    },
    methods: {
        headerChange(path){
            if(path === 'userReg' || path === 'userLogin' || path === 'userinfo') {
                this.$store.dispatch('hideHeader')
            } else{
                this.$store.dispatch('showHeader')
            }
        },
        footerChange(path) {
            if(path.indexOf('article') === -1) {
                this.$store.dispatch('showFooter')
            }else {
                this.$store.dispatch('hideFooter')
            }
        }
    },
    watch:{
        $route(to, from) {
            console.log(to.path.substring(1))
           this.footerChange(to.path.substring(1))
           this.headerChange(to.path.substring(1))
        }
    }
    }
</script>
<style>
    .slide-up-enter-active, .slide-up-leave-active {
        transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
        opacity: .7;
        transform: translate3d(0, 4em, 0);
    }
    .slide-up-enter, .slide-up-leave-active {
        opacity: .3;
        transform: translate3d(0, 4em, 0);
    }

    .slide-down-enter-active, .slide-down-leave-active {
        transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
        opacity: .7;
        transform: translate3d(0, 6em, 0);
    }
    .slide-down-enter, .slide-down-leave-active {
        opacity: .1;
        transform: translate3d(0, 6em, 0);
    }

    .slide-left-enter-active, .slide-left-leave-active {
        transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
        opacity: .5;
        transform: translate3d(2em, 0, 0);
    }

    .slide-left-enter, .slide-left-leave-active {
        opacity: .3;
        transform: translate3d(2em, 0, 0);
    }

    .slide-right-enter-active, .slide-right-leave-active {
        transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
        opacity: .5;
        transform: translate3d(5em, 0, 0);
    }
    .slide-right-enter, .slide-right-leave-active {
        opacity: .3;
        transform: translate3d(5em, 0, 0);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>