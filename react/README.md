`npm i react react-dom moment -S`
`npm i babel-core babel-loader babel-preset-react babel-preset-env -D`
`npm i webpack uglifyjs-webpack-plugin webpack-dev-server -D`

create `.babelrc`
```
{ presets: ['env','react'] }
```

create `webpack.config.js`
```
module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/react_pack.jsx',
	module: {
		loaders:[
			{ 
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
				//, query: { presets: ['env','react'] } // in .babelrc
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname
	}
};
```
