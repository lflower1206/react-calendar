'use strict'

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    debug: true,
    entry: ['webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/components/App.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loaders: ['eslint']
            }
        ],
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
