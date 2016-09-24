var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './script.jsx',
    output: { path: path.join(__dirname, 'ext'), filename: 'script.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            }
        ]
    },
};