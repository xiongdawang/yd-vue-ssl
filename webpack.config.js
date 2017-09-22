const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SwigPlugin = require('./swigPlugin');

module.exports = {
	entry: __dirname + '/src/webapp/public/js/index.js',
	output: {
		path: __dirname + "/dist/webapp/public",
		filename: "js/[name].js"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"utils", /* filename= */"js/utils.bundle.js"),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("css/index.css"),
		new SwigPlugin(),
		new HtmlWebpackPlugin({
			filename: __dirname + '/dist/webapp/views/index.html',
			template: __dirname + '/src/webapp/views/index_o.html',
			minfy: {
				removeComments: true,
				collapseWhitespace: true
			},
			inject: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: __dirname + '/dist/webapp/views/layout.html',
			template: __dirname + '/src/webapp/views/layout.html',
			minfy: {
				removeComments: true,
				collapseWhitespace: true
			},
			inject: false
		}),
		new webpack.optimize.UglifyJsPlugin({    //压缩代码
		   compress: {
		       warnings: false
		   },
		   except: ['axios', 'xtag', '$', 'exports', 'require', 'utils']    //排除关键字
		})
	],
	devtool: 'cheap-eval-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
		hot: true,
		port: 3001
	}
}