<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="isShow" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <mt-swipe :auto="4000">
                    <mt-swipe-item>
                        <img src="//img14.360buyimg.com/n2/s240x240_jfs/t1/1867/31/11716/401006/5bd072f8E6db292ab/f3610e2e816ade0f.jpg!q70.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/2617/6/6143/237736/5ba1f42aE71124526/e242e3e39ec95d66.jpg!q70.dpg.webp" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">小米8 6GB+64GB 黑色</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>市场价：<del>¥ 2399</del> &nbsp;&nbsp; 销售价：<del class="now_price">¥ 2199</del></p>
                    <p>购买数量：
                        <Numberbox @getCount = "getSelectCount"></Numberbox>
                    </p>
                    <mt-button type="primary" size="small" @click="addGoods">加入购物车</mt-button>
                    <mt-button type="danger" size="small">立即购买</mt-button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <router-link to="/home/GoodsDesc">
                    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                </router-link>
                <router-link to="/home/GoodsComment">
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponent/swiper.vue'
    import Numberbox from './GoodsNumberbox.vue'
    export default {
        data() {
            return {
                isShow: false,
                selectedCount : 1
            }
        },
        methods: {
            //小球动画
            addGoods() {
                this.isShow = !this.isShow
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            enter(el, done) {
                const ballPosition = this.$refs.ball.getBoundingClientRect()
                const badgePosition = document.getElementById('badge').getBoundingClientRect()
                const xDist = badgePosition.left - ballPosition.left
                const yDist = badgePosition.top - ballPosition.top

                el.offsetWidth;
                el.style.transform = `translate(${xDist}px,${yDist}px)`
                el.style.transition = "all 0.8s ease"
                done()
            },
            afterEnter(el) {
                this.isShow = !this.isShow
            },
            //获取按钮的值
            getSelectCount(count){
                this.selectedCount = count
                // console.log('父组件获取的值为：' + count)
            }
        },
        components: {
            Numberbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
        .now_price {
            color: #f40;
            font-size: 16px;
            font-weight: bold;
        }
        .ball {
            width: 15px;
            height: 15px;
            background: red;
            border-radius: 50%;
            position: absolute;
            top: 360px;
            left: 150px;
            z-index: 99; // transform: translate(88px,258px)
        }
        .mui-card-footer {
            display: block;
            button {
                margin: 10px 0;
            }
        }
        .mint-swipe {
            height: 200px; // background-color: blue; 
            // .mint-swipe-item:nth-child(1){
            //     background-color: red;
            // }
        }
        .mui-grid-view.mui-grid-9 {
            background-color: #fff;
            border: 0;
            img {
                height: 60px;
                width: 60px;
            }
            .mui-media-body {
                font-size: 13px;
            }
        }
        .mui-grid-view.mui-grid-9 .mui-table-view-cell {
            border: 0;
        }
        .mint-swipe-item {
            img {
                height: 100%;
            }
            text-align: center;
        }
    }
</style>
