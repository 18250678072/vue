<template>
    <div class="img">
        <div v-for="item in list" :key="item" class="img-item">
            <img :src="item" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getMinPic()
        },
        methods: {
            getMinPic() {
                this.$http.get('https://locally.uieee.com/categories/1/shops').then(res => {
                    this.list = res.body[this.id].images
                    // console.log(res.body[this.id].images)
                })
            }
        },
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
    .img {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        div{
            width: 30%;
            height: 30%;
            margin: 5px;
            box-shadow: 0 0 8px #bbb;
            // border: 3px solid black;
        }
        img{
            height: 80px;
            width: 100%;
        }
    }
</style>


