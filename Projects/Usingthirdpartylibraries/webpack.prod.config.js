const path = require('path')
//const clean = require('clean-webpack-plugin')

module.exports = {
    mode  : 'production',
    entry : './src/app.ts',
    output : {
        filename : '[name].bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'dist'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions : ['.ts','.js']
    }
}