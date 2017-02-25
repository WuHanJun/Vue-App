//定义路由组件
import Home from './components/Home.vue'
import Column from './components/Column.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'


//定向
export default[
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/column', component: Column},
    {path: '/follow', component: Follow},
    {path: '/userInfo', component: UserInfo},
    {path: '/article/:id', component: Article},
    {path: '/UserReg', component: UserReg},
    {path: '/UserLogin', component: UserLogin},
]
