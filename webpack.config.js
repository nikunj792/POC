module.exports={
	entry: './app/index.js',
	output:{
		path: __dirname,
		filename: './public/bundle.js'
	},
	watch: true,
	resolve:{
				root:__dirname,
				alias :{
				Home : 'app/component/home.js',
				Form :'app/component/form.js'
				},		
				extension:['','.js','.jsx']
			},
	module:{
		loaders:[
		{
			loader:'babel-loader',
			query:{
				presets:['react','es2015','stage-0']
			},
			test: /\.jsx?$/,
			exclude:/(node_modules|bower_components)/
		}
		]
	},
	  devtool:'cheap-module-eval-source-map'
};