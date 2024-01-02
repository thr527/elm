<template>
  <div class="test">
    <header>
        <h3>注册</h3>
    </header>


  <van-field class="box" v-model="tel" type="tel" label="手机号" />
  <van-field class="box" v-model="name" label="名字" />
  <van-field class="box" v-model="password" type="password" label="密码" />
  <van-field class="box" v-model="password" type="password" label="密码" />
  <van-button class="btn" plain hairline type="primary" block @click="Register">注册</van-button>

  <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterO.vue'
export default {
    data(){
        return{
            user:{
                tel:'',
                password:'',
                name:'',
            }
        }
    },
    components:{
        Footer
    },
    methods:{
        Register(){
            
        }
    }
}
</script>

<style scoped>

.test header{
    width: 100%;
  height: 20vw;
  background:rgb(103, 159, 215);
  text-align: center;
}
.test .box{
    margin: 4px auto;
    border: 2px solid black;
    width: 80%;
}
.test .btn{
    width: 80%;
    margin: 0 auto;
}
</style>