const path = require('path') // CommonJS

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets','js'), //Diretorio atual
        filename: 'bundle.js'
    }, 
        
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\/js$/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/env']
                }
            } 
        }]
    },
    devtool: 'source-map'
}
console.log(path) 