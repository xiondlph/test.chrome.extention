var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './main.jsx',
    output: { path: path.join(__dirname, 'extention/assets'), filename: 'script.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
};