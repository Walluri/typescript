const path = require('path')
const clean = require('clean-webpack-plugin')
module.exports = {
    mode   :  'development',
    entry  :  './src/app.ts',
    output :  {filename:'[name].ts',  path:path.resolve(__dirname,'./dist')},
    module :  {
        rules:[    {test:/\.ts$/, use:'ts-loader',exclude:/node_modules/ },     {}    ]
    },
    resolve : { 
        extensions : ['.ts','.js'] 
    } ,
    plugins:[ new clean.CleanWebpackPlugin()]    
}