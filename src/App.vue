<template>
  <div id="app">
    <NavHeader></NavHeader>
    <router-view class="router-view"></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import baseCss from './assets/css/base.css'
  import Css from './assets/css/mydoc.css'

  import NavHeader from './components/NavHeader.vue'
  import FooterBar from './components/FooterBar.vue'
  import Home from './components/Home.vue' //组件在哪里引入的在哪里注册
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ NavHeader, FooterBar, Home}
}
</script>

