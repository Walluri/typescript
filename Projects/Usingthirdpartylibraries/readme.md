1.  npm install     typescript    webpack    webpack-cli   ts-loader   webpack-dev-server
    npm install --save -dev clean-webpack-plugin

2. tsw -w : Will consult the tsconfig.json file and decide where to output the javascript file from the input typescript file.

3.  Development Script : 
       "start" : "webpack-dev-server",
    
4.  Production Script : 
       "build" :  "webpack --config webpack.config.prod.js"

5.  development :
       The webpack config file has hardcoded -- >  filename : 'bundle.js' and the same is hardcoded in the html file.
       There is not output file to be seen in the dist directory but the live reloading works in development build

6.  npm install --save -dev class-transformer      