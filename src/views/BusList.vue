<template>
    <div class="wrapper">
      <!-- header部分 -->
      <header>
        <p>商家列表</p>
      </header>
  
      <!-- 商家列表部分 -->
      <ul class="business">
        <li v-for="item in businessList" :key="item.id" @click="toBusinessInfo(item.id)">
          <div class="business-img">
            <img :src="item.businessImg" />
            <div class="business-img-quantity" >
              1
            </div>
          </div>
          <div class="business-info">
            <h3 v-text="item.businessName"></h3>
            <p>
              &#165;{{item.startPrice}}起送 | &#165;{{item.psPrice}}配送
            </p>
            <p v-text="item.msg"></p>
          </div>
        </li>
      </ul>
  
      <!-- 底部菜单部分 -->
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Footer from "@/components/FooterO.vue";
  export default {
    data(){
      return{
          //$route封装路由参数实例
          paramA:this.$route.query.a,
          paramB:this.$route.query.b,
          typeId:this.$route.query.id,
          businessList:[]
      }
    },
    mounted() {
      // alert(this.typeId)
      //发送请根据typeId查询商家列表
      this.businessList=[
          {
            id:1,
            businessImg:'img/sj01.png',
            businessName:'汉堡王',
            startPrice:20,
            psPrice:2,
            msg:"好吃不贵"
           },
           {
            id:2,
            businessImg:'img/sj02.png',
            businessName:'麦当劳',
            startPrice:30,
            psPrice:1,
            msg:"好吃不贵"
           },
           {
            id:3,
            businessImg:'img/sj03.png',
            businessName:'肯德基',
            startPrice:20,
            psPrice:0,
            msg:"好吃不贵"
           },
           {
            id:4,
            businessImg:'img/sj04.png',
            businessName:'华莱士',
            startPrice:40,
            psPrice:1,
            msg:"好吃不贵"
           },
           {
            id:5,
            businessImg:'img/sj05.png',
            businessName:'塔斯汀',
            startPrice:20,
            psPrice:1,
            msg:"好吃不贵"
           }
      ]
    },
    methods: {
      toBusinessInfo(businessId){
          this.$router.push({path:"/businfo",query:{businessId:businessId}})
      }
    },
    components: {
      Footer
    }
  };
  </script>
  
  <style scoped>
  /****************** 总容器 ******************/
  .wrapper {
    width: 100%;
    height: 100%;
  }
  
  /****************** header部分 ******************/
  .wrapper header {
    width: 100%;
    height: 12vw;
    background-color: #0097ff;
    color: #fff;
    font-size: 4.8vw;
  
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /****************** 商家列表部分 ******************/
  .wrapper .business {
    width: 100%;
    margin-top: 12vw;
    margin-bottom: 14vw;
  }
  
  .wrapper .business li {
    width: 100%;
    box-sizing: border-box;
    padding: 2.5vw;
    border-bottom: solid 1px #ddd;
    user-select: none;
    cursor: pointer;
  
    display: flex;
    align-items: center;
  }
  
  .wrapper .business li .business-img {
    /*这里设置为相当定位，成为business-img-quantity元素的父元素*/
    position: relative;
  }
  
  .wrapper .business li .business-img img {
    width: 20vw;
    height: 20vw;
  }
  
  .wrapper .business li .business-img .business-img-quantity {
    width: 5vw;
    height: 5vw;
    background-color: red;
    color: #fff;
    font-size: 3.6vw;
    border-radius: 2.5vw;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    /*设置成绝对定位，不占文档流空间*/
    position: absolute;
    right: -1.5vw;
    top: -1.5vw;
  }
  
  .wrapper .business li .business-info {
    margin-left: 3vw;
  }
  
  .wrapper .business li .business-info h3 {
    font-size: 3.8vw;
    color: #555;
  }
  
  .wrapper .business li .business-info p {
    font-size: 3vw;
    color: #888;
    margin-top: 2vw;
  }
  </style>