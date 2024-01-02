import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import vant from 'vant';
import 'vant/lib/index.css';


//路由卫士，befoeEche()在路由执行前先执行的函数
router.beforeEach(()=>{
    document.onscroll=null;
})
let vm=createApp(App)
vm.use(router)
vm.use(vant)
vm.mount('#app')
