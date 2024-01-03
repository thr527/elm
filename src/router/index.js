import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Test from '@/views/Test.vue'
import BusList from '@/views/BusList.vue'
import BusInfo from '@/views/BusInfo.vue'
import Payment from '@/views/Payment.vue'

const routes = [
  //重定向
  {
    path:'/',
    component:Index
  },
  {
    path:'/index',                                                                                                                                                                                                                                                                       
    component: Index
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/test',
    component:Test,
  },
  {
    path:'/busList',
    component:BusList,
  },
  {
    path:'/busInfo',
    component:BusInfo,
  },
  {
    path:'/payment',
    component:Payment,
  },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
