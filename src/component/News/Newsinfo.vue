<template>
    <div class="newsinfo-container">
        <h3 class="title">店铺名称： -- {{ info.name }}</h3>
        <hr>
        <div class="detail">
            <p>地址：{{ info.address }}</p>
            <p>电话：{{ info.phone }}</p>
            <p>分类：{{ info.tags }}</p>
        </div>
        <hr>
        <div class="content">
            <PhotoInfo></PhotoInfo>
        </div>
        <h3>发表评论</h3>
        <hr>
        <comment :id="this.id"></comment>
    </div>
</template>

<script>
    import comment from '../subcomponent/comment.vue'
    import PhotoInfo from '../subcomponent/PhotoInfo.vue'
    export default {
        data() {
            return {
                info: [],
                id: this.$route.params.id //获取id
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.$http.get("https://locally.uieee.com/categories/1/shops").then(res => {
                    this.info = res.body[this.id - 1]
                })
            }
        },
        components: {
            'comment': comment,
            'PhotoInfo': PhotoInfo
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: left;
            margin: 15px 0;
            color: blue;
        }
        .detail {
            font-size: 13px;
        }
    }
</style>
