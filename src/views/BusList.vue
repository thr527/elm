<template>
  <div class="buslist">
    nih
    <div class="show-bus">
            <ul class="bus-list" v-for="item in BusineseList" :key="item.id">
                <li class="first">
                    <img :src="item.img" alt="">
                    <span>广西第一汉堡1111111</span>
                </li>
                <li>
                    <div class="business-info">
					<div class="business-info-h">
						<h3>{{ item.Bname }}</h3>
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
						</div>
					</div>
					
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>				
				</div>
                </li>
                <li>
                    <div>配送:{{ item.startP }}￥</div>
                </li>
            </ul>
        </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterO.vue'
export default {
		data(){
			return {
                BusineseList:[]
			}
		},
        mounted(){
            //发送请求根据id查询商家信息
           
            this.BusineseList=[ 
                    {
                    id:1,
                    img:'/img/sj01.png',
                    Bname:'王家',
                    startP:20.0,
                    
                },
                {
                    id:2,
                    img:'/img/sj02.png',
                    Bname:'王1家',
                    startP:20.0,
                    
                },
                {
                    id:3,
                    img:'/img/sj03.png',
                    Bname:'王家',
                    startP:20.0,
                    
                },
                {
                    id:4,
                    img:'/img/sj04.png',
                    Bname:'王家',
                    startP:20.0,
                    
                },
                {
                    id:5,
                    img:'/img/sj05.png',
                    Bname:'王家',
                    startP:20.0,
                    
                },
                
            ] 
        
        },
        components:{
			Footer
		},

}
</script>

<style scoped>
.show-bus .bus-list{
        width: 90%;
        height: 30vw;
        margin: 1vw auto;
        background: rgb(217, 234, 241);
        display: flex;
        border-radius: 10px;
        
        justify-content: space-around;
        align-items: center;
    }
.show-bus .bus-list li{
        
        flex:1;
        width: 20%;
        height: 90%;
        
        
    }
.show-bus .bus-list .first{
        padding: 2vw;
        display: flex;
        flex-direction:column;
    }
.show-bus .bus-list .first span{
        font-size: small;
        color: #696262;
        width: 70%;
        /* 文字超出文本框自动加上省略号,下面这三段都要设定 */
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
    }
.show-bus .bus-list li img{
        width: 70%;
        border-radius: 5px;
    }
</style>