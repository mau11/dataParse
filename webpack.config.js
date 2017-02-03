module.exports = {
  entry: './public/index.js',
  output: {
    filename: './public/bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: [/|.js$/, /\.es6$/, /\.json$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
    }]
  }
}
