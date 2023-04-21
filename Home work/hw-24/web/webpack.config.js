const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader",],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new miniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
};