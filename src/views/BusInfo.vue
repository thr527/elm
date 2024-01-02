<template>
    <div class="wrapper">
      <!-- header部分 -->
      <header>
        <p>商家信息</p>
      </header>
  
      <!-- 商家logo部分 -->
      <div class="business-logo">
        <img :src="businessInfo.businessImg" />
      </div>
  
      <!-- 商家信息部分 -->
      <div class="business-info">
        <h1 v-text="businessInfo.businessName"></h1>
        <p>&#165;{{businessInfo.startPrice}}起送 &#165;{{businessInfo.psPrice}}配送</p>
        <p v-text="businessInfo.msg"></p>
      </div>
  
      <!-- 食品列表部分 -->
      <ul class="food">
        <li v-for="item in foodList" :key="item.id">
          <div class="food-left">
            <img :src="item.foodImg" />
            <div class="food-left-info">
              <h3 v-text="item.foodName"></h3>
              <p v-text="item.foodMsg"></p>
              <p>&#165;{{item.foodPrice}}</p>
            </div>
          </div>
          <div class="food-right">
            <div>
              <i class="fa fa-minus-circle"></i>
            </div>
            <p>
              <span>{{item.num}}</span>
            </p>
            <div>
              <i class="fa fa-plus-circle" @click="add(item.id)"></i>
            </div>
          </div>
        </li>
      </ul>
  
      <!-- 购物车部分 -->
      <div class="cart">
        <div class="cart-left">
          <!-- <div
            class="cart-left-icon"
            :style="
              totalQuantity == 0
                ? 'background-color:#505051;'
                : 'background-color:#3190E8;'
            "
          >
            <i class="fa fa-shopping-cart"></i>
            <div class="cart-left-icon-quantity" v-show="totalQuantity != 0">
              {{ totalQuantity }}
          </div>-->
          <div class="cart-left-icon" style="background-color:#3190E8;">
            <i class="fa fa-shopping-cart"></i>
            <div class="cart-left-icon-quantity" v-show="numSum>0">{{numSum}}</div>
          </div>
          <div class="cart-left-info">
            <p>&#165;{{money}}</p>
            <p>另需配送费{{businessInfo.psPrice}}元</p>
          </div>
        </div>
        <div class="cart-right">
          <!-- 不够起送费 -->
          <!-- <div
            class="cart-right-item"
            v-show="totalSettle < business.starPrice"
            style="background-color: #535356; cursor: default"
          >
            &#165;{{ business.starPrice }}起送
          </div>-->
          <!-- 达到起送费 -->
          <div class="cart-right-item">去结算</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        businessId: this.$route.query.businessId,
        businessInfo: {},
        foodList: [],
        cartList: [],
        userId: 200
      };
    },
    mounted() {
      //alert(this.businessId);
      //根据businessId查询当前商家信息
      this.businessInfo = {
        id: 1,
        businessImg: "img/sj01.png",
        businessName: "汉堡王",
        startPrice: 20,
        psPrice: 2,
        msg: "好吃不贵"
      };
      this.getCartList();
      this.getFoodList();
      this.isCartFood();
    },
    methods: {
      //获取购物车数据 -请求服务器
      getCartList() {
        //根据businessId和userId查询当前用户在当前商家的购物车列表信息
        //模拟购车内存数据(虚拟数据) 购物车中的每一个对象就是一个购物项
        this.cartList = [
        ];
      },
      //获取食品数据
      getFoodList() {
        //根据businessId查询当前商家的食品列表信息
        this.foodList = [
          {
            id: 1,
            foodName: "薯条",
            foodMsg: "好吃的薯条",
            foodPrice: 8,
            foodImg: "img/sp01.png"
          },
          {
            id: 2,
            foodName: "汉堡",
            foodMsg: "好吃的汉堡",
            foodPrice: 20,
            foodImg: "img/sp02.png"
          },
          {
            id: 3,
            foodName: "可乐",
            foodMsg: "好喝的可乐",
            foodPrice: 4,
            foodImg: "img/sp03.png"
          },
          {
            id: 4,
            foodName: "鸡块",
            foodMsg: "好吃的鸡块",
            foodPrice: 10,
            foodImg: "img/sp04.png"
          },
          {
            id: 5,
            foodName: "炸鸡",
            foodMsg: "好吃的炸鸡",
            foodPrice: 30,
            foodImg: "img/sp05.png"
          }
        ];
      },
      //判断当前用户是否将商家的食品添加到购物车
      isCartFood() {
        for (let i = 0; i < this.foodList.length; i++) {
          this.foodList[i].num = 0;
          for (let k = 0; k < this.cartList.length; k++) {
            if (this.foodList[i].id == this.cartList[k].foodId) {
              this.foodList[i].num = this.cartList[k].quantity;
              break;
            }
          }
        }
      },
      add(foodId) {
          
         let cartItem={id:"",businessId:this.businessId,userId:this.userId,foodId:foodId,quantity:1}
        //往购物车中添加食品数据
        //如果当前购物车中没有任何食品，直接添加即可
        if(this.cartList.length==0){
          this.cartList.push(cartItem)
        }else{
          //判断当前购物车中是否有该食品
          //一开始认为没有在购物车中
          let flag=false
          for(let i=0;i<this.cartList.length;i++){
              if(this.cartList[i].foodId==foodId){
                  this.cartList[i].quantity=this.cartList[i].quantity+1
                  flag=true;
                  break;
              }
          }
          if(!flag){
              this.cartList.push(cartItem)
          }
          
        }
        this.isCartFood();
      }
    },
    //计算属性
    computed:{
      numSum(){
          let num=0;
          for(let i=0;i<this.cartList.length;i++){
              num=num+this.cartList[i].quantity
          }
          return num
      },
      money(){
          let money=0;
          for(let i=0;i<this.foodList.length;i++){
              money+=this.foodList[i].num*this.foodList[i].foodPrice
          }
          return money
      }
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
  
  /****************** 商家logo部分 ******************/
  .wrapper .business-logo {
    width: 100%;
    height: 35vw;
    /*使用上外边距避开header部分*/
    margin-top: 12vw;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .business-logo img {
    width: 40vw;
    height: 30vw;
    border-radius: 5px;
  }
  
  /****************** 商家信息部分 ******************/
  .wrapper .business-info {
    width: 100%;
    height: 20vw;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper .business-info h1 {
    font-size: 5vw;
  }
  .wrapper .business-info p {
    font-size: 3vw;
    color: #666;
    margin-top: 1vw;
  }
  
  /****************** 食品列表部分 ******************/
  .wrapper .food {
    width: 100%;
    /*使用下外边距避开footer部分*/
    padding-bottom: 14vw;
  }
  .wrapper .food li {
    width: 100%;
    box-sizing: border-box;
    padding: 2.5vw;
    user-select: none;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper .food li .food-left {
    display: flex;
    align-items: center;
  }
  .wrapper .food li .food-left img {
    width: 20vw;
    height: 20vw;
  }
  .wrapper .food li .food-left .food-left-info {
    margin-left: 3vw;
  }
  .wrapper .food li .food-left .food-left-info h3 {
    font-size: 3.8vw;
    color: #555;
  }
  .wrapper .food li .food-left .food-left-info p {
    font-size: 3vw;
    color: #888;
    margin-top: 2vw;
  }
  .wrapper .food li .food-right {
    width: 16vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper .food li .food-right .fa-minus-circle {
    font-size: 5.5vw;
    color: #999;
    cursor: pointer;
  }
  .wrapper .food li .food-right p {
    font-size: 3.6vw;
    color: #333;
  }
  .wrapper .food li .food-right .fa-plus-circle {
    font-size: 5.5vw;
    color: #0097ef;
    cursor: pointer;
  }
  
  /****************** 购物车部分 ******************/
  .wrapper .cart {
    width: 100%;
    height: 14vw;
  
    position: fixed;
    left: 0;
    bottom: 0;
  
    display: flex;
  }
  .wrapper .cart .cart-left {
    flex: 2;
    background-color: #505051;
    display: flex;
  }
  .wrapper .cart .cart-left .cart-left-icon {
    width: 16vw;
    height: 16vw;
    box-sizing: border-box;
    border: solid 1.6vw #444;
    border-radius: 8vw;
    background-color: #3190e8;
    font-size: 7vw;
    color: #fff;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-top: -4vw;
    margin-left: 3vw;
  
    position: relative;
  }
  .wrapper .cart .cart-left .cart-left-icon-quantity {
    width: 5vw;
    height: 5vw;
    border-radius: 2.5vw;
    background-color: red;
    color: #fff;
    font-size: 3.6vw;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    position: absolute;
    right: -1.5vw;
    top: -1.5vw;
  }
  .wrapper .cart .cart-left .cart-left-info p:first-child {
    font-size: 4.5vw;
    color: #fff;
    margin-top: 1vw;
  }
  .wrapper .cart .cart-left .cart-left-info p:last-child {
    font-size: 2.8vw;
    color: #aaa;
  }
  
  .wrapper .cart .cart-right {
    flex: 1;
  }
  /*达到起送费时的样式*/
  .wrapper .cart .cart-right .cart-right-item {
    width: 100%;
    height: 100%;
    background-color: #38ca73;
    color: #fff;
    font-size: 4.5vw;
    font-weight: 700;
    user-select: none;
    cursor: pointer;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>