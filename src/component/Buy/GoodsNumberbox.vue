<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" ref="btn"
        @change="countChange"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        mounted() {
            mui("mui-numbox").numbox()
        },
        methods: {
            countChange(){
                this.$emit("getCount",parseInt(this.$refs.btn.value))
                // console.log(this.$refs.btn.value)
            }
        }
    }
</script>

<style>

</style>
