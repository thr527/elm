<template>
  <ul class="footer">
                <li @click="toLogin()"><i class="fa fa-tint" aria-hidden="true" ></i><p>登录</p></li>
                
                <li><i class="fa fa-tint" aria-hidden="true" ></i><p>文字</p></li>
                
                <li><i class="fa fa-tint" aria-hidden="true" ></i><p>文字</p></li>
                
                <li @click="toIndex()"><i class="fa fa-tint" aria-hidden="true" ></i><p>首页</p></li>
                
    </ul>
           
            
</template>

<script>
export default {
  methods:{
    toLogin(){
      this.$router.push({path:'/Login'})
    },
    toIndex(){
      this.$router.push({path:'/Index'})
    }
  }
}
</script>

<style>

.footer{
  width: 100%;
  height: 14vw;
  border-top: solid 1px #ddd;
  background-color: #fff;

  position: fixed;
  left: 0;
  bottom: 1px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer li{
    /*li本身的尺寸完全由内容撑起*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #999;
  user-select: none;
  cursor: pointer;
}
</style>