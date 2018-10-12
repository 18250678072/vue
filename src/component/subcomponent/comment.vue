<template>
    <div>
        <textarea placeholder="请输入你的评论" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.id">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{ item.name }}&nbsp;&nbsp;发表时间：{{ item.date }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                    <!-- {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }} -->
                </div>
            </div>
            <mt-button type="danger" size="large" plain>加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    export default {
        data() {
            return {
                comments: [],
                msg:""
            }
        },
        created() {
            this.getComment()
        },
        methods: {
            getComment() {
                this.$http.get("https://locally.uieee.com/categories/1/shops").then(res => {
                    this.comments = res.body[this.id].comments
                    // console.log(this.comments)
                })
            },
            postComment(){
                if(this.msg === ""){
                    return Toast('评论内容不能为空！')
                }
                var obj = {
                    name: "匿名用户",
                    date: Date.now(),
                    content: this.msg
                }
                this.comments.unshift(obj)
                this.msg = ""
            }
        },
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
</style>


