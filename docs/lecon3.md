# Leçon 3 Angular 

## Configuration Webpack

[Gestionnaire de bundle Webpack](https://webpack.js.org/)

Installation

``` console
npm i webpack --save-dev
```

exemple fichier de config

``` js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'index.js'
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
```

[loader ou transpilateur babel](https://github.com/babel/babel-loader)
