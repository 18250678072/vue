<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.id">
            <img :src="item.image" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        props: ['lunbotu']
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        background-color: blue; // .mint-swipe-item:nth-child(1){
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
    }
</style>

