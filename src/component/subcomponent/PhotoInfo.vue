<template>
    <div>
        <h1>图片</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.getMinPic()
    },
    methods: {
        getMinPic(){
            this.$http.get('https://locally.uieee.com/categories/1/shops').then(res => {
                console.log(res.body)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


