const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'./md5.js'
	],
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'md5.min.js',
		libraryTarget: "var",
		library: "MD5"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			},
			output: {
				comments: false
			}
		})
	],
};