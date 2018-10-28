<template>
    <div>
        <!-- <h1>HomeContainer</h1>  -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbo" :key="item.id">
                <img :src="item.image" alt="">
            </mt-swipe-item>
        </mt-swipe> -->
        <swiper :lunbotu = "lunbo"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/Newslist">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">美食美客</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Buy">
		                    <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../image/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../image/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../image/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponent/swiper.vue'

export default {
    data(){
        return{
            lunbo:[]
        }
    },
    created(){
        this.getLunbo()
    },
    methods:{
        getLunbo(){
            this.$http.get('https://locally.uieee.com/slides').then(res=>{
                if(res.status === 200){
                    this.lunbo = res.body
                }else{
                    Toast('页面加载失败！')
                }
                // console.log(this.lunbo)
            })
        }
    },
    components:{
        swiper
    }
}
</script>


<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        background-color: blue;
        // .mint-swipe-item:nth-child(1){
        //     background-color: red;
        // }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
        img{
            height: 60px;
            width: 60px;
        }
        .mui-media-body{
        font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
    .mint-swipe-item{
        img{
            height: 100%;
        }
    }
</style>


