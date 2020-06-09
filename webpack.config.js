const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        // secondName: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    devServer: {
      overlay: true
    }
}