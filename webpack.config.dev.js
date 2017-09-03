const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

config.devtool = 'cheap-module-eval-source-map';

config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('dev'),
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