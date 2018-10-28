import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import app from './app.vue'
import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


console.log('ok')
var vm = new Vue({
	el:"#app",
	render: c => c(app),
	router
})