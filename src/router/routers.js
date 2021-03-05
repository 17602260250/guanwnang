export default [{
		path: '/',
		redirect: '/index',
		title: '首页'
	},
	{
		path: '/index',
		name: 'index',
		title: '首页',
		component: () => import('@/views/index.vue'),
		children:[
			
		]
	},
	{
		path: '/IndustryInformation',
		name: 'IndustryInformation',
		title: '行业资讯',
		component: () => import('@/views/IndustryInformation.vue'),
		children:[
			
		]
	},
	{
		path: '/register',
		name: 'register',
		title: '注册',
		component: () => import('@/views/register.vue'),
		children:[
			
		]
	}
]
