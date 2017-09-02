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
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader?importLoaders=1',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')({
										browsers: ['ios >= 7.0'],
									}),
								],
							},
						},
					],
				}),
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader?importLoaders=1',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')({
										browsers: ['ios >= 7.0'],
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								outputStyle: 'compact',
							},
						},
					],
				}),
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]',
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
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
		}),
		new ExtractTextPlugin({
			filename: 'stylesheet/[name].css',
			disable: false,
			allChunks: true,
		})
	],
}