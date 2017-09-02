const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool:'cheap-module-eval-source-map',
	entry:{
		index:path.resolve(__dirname,'./examples/index.js')
	},
	output:{
		path:path.resolve(__dirname,'assets'),
		filename:'js/[name].[hash:8].js',
		chunkFilename:'js/[name].[chunkhash:8].js',
		publicPath: '/',
	},
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react', 'stage-0'],
							plugins: [
								'transform-runtime',
								'add-module-exports',
							],
						},
					},
				],
			},
		]
	},
	resolve: {
		extensions: [' ', '.js', '.jsx', '.scss'],
	},
	devServer: {
		contentBase: "./assets",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `./examples/index.html`,
			filename: `index.html`,
			chunks: ['vendors', 'index'],
		})
	],
}