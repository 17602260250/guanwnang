import 'babel-polyfill';
import '@/assets/icon/iconfont.css';
import Vue from 'vue';
import {
	Button,
	Input,
	Header,
	Main,
	Footer,
	Loading,
	Message,
	Container,
	Divider,
	Alert,
	MessageBox,
	Radio,
	Dialog
} from 'element-ui';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store';
import http from '@/assets/utils/api.js';
//Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading.directive);
Vue.use(Container)
Vue.use(Divider)
Vue.use(Dialog)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
