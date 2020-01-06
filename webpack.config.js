/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index"),
    output: {
        filename: 'index.bundle.js',
        path: path.join(__dirname, "dist")
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Users',
            template: './src/index.html'
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
          { test: /\.js|.jsx$/, 
            exclude: /node_modules/, 
            resolve: {
                extensions: [".js", ".jsx"]
              },
            loader: "babel-loader" },
          {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
          }
        ]
    }
};