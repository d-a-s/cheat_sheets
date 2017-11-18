module.exports = {
	entry: __dirname + '/react_pack.jsx',
	module: {
		loaders:[
			{ 
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname
	}
};

