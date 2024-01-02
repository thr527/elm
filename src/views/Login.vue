<template>
  <div class="Login">
    <header>
      <h3>登录</h3>
    </header>
    <ul class="login-box">
      <li>
        <i class="fa fa-user-circle fa-2x" aria-hidden="true" />
        <van-field v-model="id" type="password" label="账号" class="id"/>
      </li>
      <li>
        <i class="fa fa-key fa-2x" aria-hidden="true" />
        <van-field v-model="password" type="password" label="密码" class="passwrod"/>
      </li>
    </ul>
    <van-button class="btn" block @click="toLogin">登录</van-button>
    <van-button class="btn" block @click="toRegister()">注册</van-button>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterO.vue'

export default {
    components:{
        Footer
    },
    methods:{
      toLogin(){
      this.$router.push({path:'/'})
    },
    toRegister(){
      this.$router.push({path:'/Test'})
    }

    }
}
</script>

<style>
.Login{
    width: 100%;
}
header{
  width: 100%;
  height: 20vw;
  background:rgb(103, 159, 215);
  text-align: center;
}
.Login .login-box{
  margin-inline-start:10vw;
  margin-block-start:20vw;
  margin-inline-end: 10vw;

}

.Login .login-box li{
    width: 100%;
    margin: 5px;
    display: flex;
    align-items: center;
    right: 0px;
    border:2px black solid;
    padding-left: 2px;
    border-radius: 4px;
}
.Login .login-box li .id {
    width: 50vw;
}
.Login  .btn{
    
    margin: 2px ;
    width: 100%;
    background: rgb(148, 229, 240);
}
</style>