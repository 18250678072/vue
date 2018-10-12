<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in NewslistData" :key="item.id">
					<router-link :to="'/home/Newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.images[1]">
						<div class="mui-media-body">
							{{ item.name }}
							<p class='mui-ellipsis'>{{ item.address }}</p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				NewslistData:[]
			}
		},
		created(){
			this.getNewslist()
		},
		methods:{
			getNewslist(){
				this.$http.get("https://locally.uieee.com/categories/1/shops").then(res => {
					this.NewslistData = res.body
				}
				)
			}
		}
	};
</script>

<style lang="scss" scoped>
	
</style>
