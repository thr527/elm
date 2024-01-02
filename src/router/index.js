import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Test from '@/views/Test.vue'
import BusList from '@/views/BusList.vue'

const routes = [
  //重定向
  {
    path:'/',
    component:Index
  },
  {
    path:'/Index',                                                                                                                                                                                                                                                                       
    component: Index
  },
  {
    path:'/Login',
    component:Login,
  },
  {
    path:'/Test',
    component:Test,
  },
  {
    path:'/BusList',
    component:BusList,
  },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
