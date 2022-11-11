const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, './dist'),
        port: 3000,
        hot: true,
        compress: true,
        open: true,
        historyApiFallback: true,
        allowedHosts: ['localhost', '.merisaarinen.tech', 'merisaarinen-web.azurewebsites.net'],
    },
    plugins: [new Dotenv({ path: `./.env.development` })],
});
