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
	}
]
