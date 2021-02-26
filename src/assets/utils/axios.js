import axios from "axios";
import qs from "qs";
import {
	Message,
	Loading 
} from 'element-ui';
const service = axios.create({
	baseURL:process.env.NODE_ENV == 'development' ? '/yisheyun/' : "http://test.store.yisheyun.cn/api/",
	timeout:10000,
	withCredentials: true,
	headers: {
		 "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
	}
});

service.interceptors.request.use(  //请求数据之前
	(config) => {
		if (config.method === "post") {
			let curPost = config.url.split("/")[config.url.split("/").length - 1];
			if (curPost === "uploadpicture" || curPost === "fileUpload") {   //是否格式化请求数据
				return config; 
			} else {
				config.data = qs.stringify(config.data);
				return config;
			}
		}
		return config;
	},
	(error) => {
		return Promise.reject();
	}
);
service.interceptors.response.use(response => {  //数据接收之后
	if (response.status === 200) {
		return response.data;
	} else {
		Promise.reject();
	}
}, error => {
	if (error && error.response) {
		switch (error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误,未找到该资源'
				// window.location.href = "/NotFound"
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			case 422:
				error.message=error.response.data.message;
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
		Message.error(error.message)
	} else {
		if (qs.stringify(error).includes('timeout')) {
			Message.error('服务器响应超时，请刷新当前页')
		}else {
			return Promise.resolve({noHttp:true})
		}
	}
})

export default service;
