// path 是 node中的内置模块
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 配置打包的入口文件
    entry: './src/js/main.js',
    // 配置打包后的输出路径
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'buld.js'
    },


    // 该配置项专门用来添加各种插件
    plugins: [

        // 配置html自动脚本注入
        new htmlWebpackPlugin({
            template: './src/index.html',//原html
            filename: 'index.html',//注入后的html
            inject: 'body'//
        })
    ],


    // 该配置项专门用来扩展webpack能够打包的文件类型的
    module: {

        rules: [
            {
                test: /\.css$/,
                // loader配置的又顺序的，webpack会倒序调用相对应的loader
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },

            {
                test: /\.tpl$/,
                use: [
                    'html-loader'
                ]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10000 }
                    },
                    'image-webpack-loader'
                ]
            },

            // 转换js脚本为es5语法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        }
                    }
                ]
            },

            // 配置vue文件的解析转换
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    }
};