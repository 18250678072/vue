<template>
    <div class="goods-list">
        <router-link class="container" to="/home/GoodsInfo">
            <img src="//img14.360buyimg.com/n2/s240x240_jfs/t1/1867/31/11716/401006/5bd072f8E6db292ab/f3610e2e816ade0f.jpg!q70.jpg" alt="">
            <div>
                <h1> 小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待 </h1>
                <div class="info">
                    <p class="price">
                        <span class="now">899</span>
                        <span class="old">999</span>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>月销量：1000</span>
                    </p>
                </div>
            </div>
        </router-link>
        <router-link class="container" to="/home/GoodsInfo">
            <img src="//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/2617/6/6143/237736/5ba1f42aE71124526/e242e3e39ec95d66.jpg!q70.dpg.webp" alt="">
            <div>
                <h1> 小米8青春版 梦幻蓝 拍照游戏智能手机 </h1>
                <div class="info">
                    <p class="price">
                        <span class="now">899</span>
                        <span class="old">999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>月销量：100</span>
                    </p>
                </div>
            </div>
        </router-link>
        <router-link class="container" to="/home/GoodsInfo">
            <img src="//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/2617/6/6143/237736/5ba1f42aE71124526/e242e3e39ec95d66.jpg!q70.dpg.webp" alt="">
            <div>
                <h1> 小米8青春版 梦幻蓝 拍照游戏智能手机 </h1>
                <div class="info">
                    <p class="price">
                        <span class="now">899</span>
                        <span class="old">999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>月销量：10</span>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
    }
</script>


<style lang="scss" scoped>
    .goods-list {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 8px;
        .container {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
                width: 100%;
            }
            h1 {
                font-size: 14px;
            }
            p{
                margin: 0;
                padding: 5px;
            }
            .info{
                background-color: #eee;
                .price{
                    .now{
                        font-size: 16px;
                        font-weight: bold;
                        color: #f40;
                    }
                    .old{
                        text-decoration: line-through;
                        margin: 10px;
                        font-size: 12px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
