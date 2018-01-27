var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015','react']
                        }
                    }
                ]
            },
            {
              test: /\.css$/,
              use: ['style-loader','css-loader']
             },
            {
              test: /\.png$/, 
              loader: "url-loader?mimetype=image/png"
            }
        ]
    }
};