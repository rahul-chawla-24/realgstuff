var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.(js)$/, use : 'babel-loader'},
            {test:/\.(css)$/, use : ['style-loader','css-loader']}
        ]
    },
    mode:'development',
    plugins:[ 
        new htmlWebpackPlugin({
            template : 'Public/index.html'
        })
    ]

};