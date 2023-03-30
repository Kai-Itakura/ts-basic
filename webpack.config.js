import path from 'path'

module.exports = {
	entry: {
		bundle: './src/index.ts'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		open: true
	},
	module: {
		rules: [
			{
				loader: 'ts-loader',
				test: /\.ts$/
			}
		]
	},
	node: {
		__dirname: true
	}
}