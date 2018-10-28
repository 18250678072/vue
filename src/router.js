import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/Homecontainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import Newslist from './component/News/Newslist.vue'
import Newsinfo from './component/News/Newsinfo.vue'
import Buy from './component/Buy/Buy.vue'
import GoodsInfo from './component/Buy/GoodsInfo.vue'
import GoodsDesc from './component/Buy/GoodsDesc.vue'
import GoodsComment from './component/Buy/GoodsComment.vue'

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home' }, 
		{ path: '/home', component: HomeContainer },
		{ path: '/member', component: MemberContainer },
		{ path: '/shopcar', component: ShopcarContainer },
		{ path: '/search', component: SearchContainer },
		{ path: '/home/Newslist', component: Newslist },
		{ path: '/home/Newsinfo/:id', component: Newsinfo},
		{ path: '/home/Buy', component: Buy },
		{ path: '/home/GoodsInfo', component: GoodsInfo },
		{ path: '/home/GoodsDesc',component: GoodsDesc },
		{ path: '/home/GoodsComment',component: GoodsComment }
	],
	linkActiveClass:'mui-active'
})

export default router