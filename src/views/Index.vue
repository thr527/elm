<template>
    
    <div class="wap">
        <header id="hd" ref="head">
            <div class="icon-location-box">
                 <div class="icon-location"></div>
            </div>
      <div class="location-text">
        沈阳市规划大厦<i class="fa fa-caret-down"></i>
      </div>
        </header>
        <div class="search" ref="seach">
            <div class="search-box" >
                <li class="text">搜索</li>
            </div>
        </div>
        <ul class="choose_box">
            <li v-for="item in foodList" :key="item.id" @click="toBusListshow(item.id)">
                <!-- v-bind 给属性赋值 -->
                <img :src="item.foodimg" alt="">
                <p>{{ item.Fname }}</p>
                </li>
           
        </ul>
        <div class="show-back" style="z-index: -1;">
            <h3>品质</h3>
            <p>搭配</p>
            <a href="">你好</a>

        </div>
        <div class="supermember">
			<div class="left">
				<img src="@/assets/img/super_member.png">
				<h3>超级会员</h3>
				<p>&#8226; 每月享超值权益</p>
			</div>
			<div class="right">
				立即开通 
			</div>
		</div>
        <div class=" bus-box">
            <hr>
            推荐商家
            <hr>
        </div>
        <ul class="recommend">
            <li>综合排序</li>
            <li>距离最近</li>
            <li>销量最高</li>
            <li>筛选</li>
        </ul>
        <div class="show-bus">
            <ul class="bus-list" v-for="item in businessImg" :key="item.id">
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
    //页面挂载完成后自动加载，不需要手动调用
    //加载html模板
    //创建vue实例-初始化data数据created()
    //vue实例拉取模板
    //将data数据挂载到模板--muunted() -每次数据更新都执行一次
    //将model和模板整合的资源渲染到页面
    mounted(){
        document.onscroll=()=>{
            let s1=document.documentElement.scrollTop;//IE6/7生效
            let s2=document.body.scroll;//只在谷歌浏览器生效
            let sc= s1==0?s2:s1;
            console.log('sc='+sc);
            let width_w=document.documentElement.clientWidth;
            let sec=this.$refs.seach;
            if(sc>width_w*0.12){
                sec.style.position='fixed';
                sec.style.top='10px';
                sec.style.left='0px';
                console.log('固定')
            }else{
                sec.style.position = 'static';
                
            }
        }

    },
//     unmounted(){
// document.onscroll = null;
//             alert();
//     },
    data(){
        return{
            //模拟数据
            foodList:[
                {
                    id:1,
                    foodimg:'/img/dcfl01.png',
                    Fname:'美食'
                },
                {
                    id:2,
                    foodimg:'/img/dcfl02.png',
                    Fname:'美食'
                },
                {
                    id:3,
                    foodimg:'/img/dcfl03.png',
                    Fname:'美食'
                },
                {
                    id:4,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:5,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:6,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:7,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:8,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:9,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
                {
                    id:10,
                    foodimg:'/img/dcfl04.png',
                    Fname:'美食'
                },
            ],
            businessImg:[
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
        }
    },
    methods:{
            toBusListshow(id){
                //路由传参有两种方式：params和query
                //要使用对象方式来push 使用{}来表示
                alert(id);
                this.$router.push({path:"/BusList"})
            },
    },
    components:{
        Footer
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
}
.wap{
    position: absolute;
    width:100%;
    padding-bottom: 16vw;
}
.wap header{
    width: 100%;
    height: 12vw;
     border: 2px black solid;
     background: rgb(120, 120, 239);
}

.icon-location-box{
    margin-left: 20px;
    padding: 2px;
}
.location-text{
    margin-left: 20px;
}
.content{
    padding:12vw ;
}
.wap .search{
    background:blanchedalmond;
    width:100%;
    height: 10vw;
    color:black;
    display:flex;
    justify-content: center;
    align-items: center;
}
.wap .search .search-box{
    background:white;
    width:80%;
    height:7vw;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
}
.wap .search .search-box .text{
    width:80%;

}
/* 美食分类 */
.wap .choose_box{
    width:90%;
    background:rgb(246, 243, 244);
    height: 50vw;
    display : flex;
    margin: 0 auto;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.wap .choose_box li{
    width: 18vw;
    height: 20vw;

}
.wap .choose_box li img{
    border-radius: 20px;
    width: 15vw;
    height: 15vw;
}
.wap .choose_box li p{
    font-size: 3.5vw;
} 

.wap .show-back{
    width:95%;
    height: 30vw;
    margin: 0 auto;
    background:pink;
    background-image: url('/public/img/index_banner.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.wap .supermember {
		/*这里也设置容器宽度95%，不能用padding，因为背景色也会充满padding*/
		width: 95%;
		margin: 0 auto;
		height: 11.5vw;
		background-color: #FEEDC1;
		margin-top: 1.3vw;
		border-radius: 4px;
		color: #644F1B;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wap .supermember .left {
		display: flex;
		align-items: center;
		margin-left: 4vw;
		user-select: none;
	}

	.wap .supermember .left img {
		width: 6vw;
		height: 6vw;
		margin-right: 2vw;
	}

	.wap .supermember .left h3 {
		font-size: 4vw;
		margin-right: 2vw;
	}

	.wap .supermember .left p {
		font-size: 3vw;
	}

	.wap .supermember .right {
		font-size: 3vw;
		margin-right: 4vw;
		cursor: pointer;
	}
    .wap .bus-box{
        width: 100%;
        margin: 0 auto;
        height: 14vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wap .bus-box hr{
        border: 1px black solid;
        width: 7vw;
    }
    .wap .recommend{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 4vw;
    }
    .wap .show-bus .bus-list{
        width: 90%;
        height: 30vw;
        margin: 1vw auto;
        background: rgb(217, 234, 241);
        display: flex;
        border-radius: 10px;
        
        justify-content: space-around;
        align-items: center;
    }
    .wap .show-bus .bus-list li{
        
        flex:1;
        width: 20%;
        height: 90%;
        
        
    }
    .wap .show-bus .bus-list .first{
        padding: 2vw;
        display: flex;
        flex-direction:column;
    }
    .wap .show-bus .bus-list .first span{
        font-size: small;
        color: #696262;
        width: 70%;
        /* 文字超出文本框自动加上省略号,下面这三段都要设定 */
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
    }
    .wap .show-bus .bus-list li img{
        width: 70%;
        border-radius: 5px;
    }
    .wap .show-bus .bus-list li .le{
        width: 90%;
    }
</style>