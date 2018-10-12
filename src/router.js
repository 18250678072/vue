import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/Homecontainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import Newslist from './component/News/Newslist.vue'
import Newsinfo from './component/News/Newsinfo.vue'

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home' }, 
		{ path: '/home', component: HomeContainer },
		{ path: '/member', component: MemberContainer },
		{ path: '/shopcar', component: ShopcarContainer },
		{ path: '/search', component: SearchContainer },
		{ path: '/home/Newslist', component: Newslist },
		{ path: '/home/Newsinfo/:id', component: Newsinfo}
	],
	linkActiveClass:'mui-active'
})

export default router