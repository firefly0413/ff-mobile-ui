const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

config.plugins.push(new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.css$/g,
	cssProcessor: require('cssnano'),
	cssProcessorOptions: {
		discardComments: {
			removeAll: true,
		},
	},
	canPrint: true,
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false,
	},
	output: {
		comments: false,
	},
	sourceMap: true,
	mangle: true,
}));

config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('prod'),
	},
	__DEBUG__: true,
}));

Object.keys(config.entry).map((item) => {
	if (item !== 'vendor') {
		config.plugins.push(new HtmlWebpackPlugin({
			template: `./examples/${item}.html`,
			filename: `${item}.html`,
			chunks: ['vendor', item],
		}));
	}
	return false;
});

module.exports = config;