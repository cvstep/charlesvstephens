const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: "./lib/modules/github-embed-widgets/public/js/site.js",
    },
    devServer: {
     contentBase: './lib'
   },
    output: {
        path: __dirname + "/lib/modules/github-embed-widgets/public/js",
        filename: "site.bundle.js"
    },
    plugins: []
};
