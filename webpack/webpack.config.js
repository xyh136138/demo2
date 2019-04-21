const path = require('path');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const webpack=require('webpack');
var CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports={
    mode: 'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders: 1}
                    },'postcss-loader']
                })
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('index.css'),
        new webpack.BannerPlugin('勇士总冠军'),

        new CopyWebpackPlugin([{
            from: './src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8083,
        open:true,
    }
}