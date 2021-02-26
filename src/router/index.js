import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers.js';
Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})
router.beforeEach((to, from, next) => {
	// let isLogin = localStorage.getItem('loginToken'); //跳转前检查登录状态
	// if (!isLogin) {
	// 	localStorage.removeItem('loginToken');
	// 	if (to.path !== '/login') {
	// 		next({
	// 			path: '/login'
	// 		})
	// 	} else {
	// 		next()
	// 	}
	// } else {
	// 	next()
	// }
	next()
})
export default router
