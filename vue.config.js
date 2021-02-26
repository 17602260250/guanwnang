const path = require('path'); //引入path模块
function resolve(dir) {
	return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
	productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
	configureWebpack: {
		plugins: [
			new CompressionPlugin({
				filename: "[path].gz[query]",
				algorithm: "gzip",
				test: productionGzipExtensions,
				// 只处理大于xx字节 的文件，默认：0
				threshold: 10240,
				// 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
				minRatio: 0.8, // 默认: 0.8
				// 是否删除源文件，默认: false
				deleteOriginalAssets: false
			})
		]
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('./src'))
			.set('public_', resolve('./public'))
			.set('assets_', resolve('./src/assets'))
			.set('components_', resolve('./src/components'))
			.set('views_', resolve('./src/views'))
	},
	devServer: {
		port: 7090,
		proxy: {
			'/yisheyun': {
				target: 'http://test.store.yisheyun.cn/api',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/yisheyun': ''
				}
			}
		}
	}
}
