const path = require('path');
const HtmlWebpackPluguin= require('html-webpack-plugin')
const htmlWebpack = new HtmlWebpackPluguin({
    template:'./assets/index.template.html',
    filename:'index.html'
})

module.exports={
    entry:'./assets/javascript/entry.js',
    output:{
        publicPath: '/',
        path: path.join(__dirname,'..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins:[htmlWebpack],
    module:{
        rules:[
           
            {
                test: /\.(gif|jpg|jpeg|tiff|png)$/,
                loader: 'url-loader'
              },
        ]
    }
}   