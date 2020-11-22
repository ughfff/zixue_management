import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import home from './components/home.vue'
import welcome from './components/welcome.vue'
import yhgl from './components/user/yhgl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'/login'
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/home',component:home,
      redirect:'/welcome', //别忘了在main位置放路由占位符
      children:[
        { path:'/welcome',component:welcome },
        { path:'/yhgl' ,component:yhgl }
      ]
    }
  ]
})
