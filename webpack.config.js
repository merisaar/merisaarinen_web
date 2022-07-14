const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    var environment = `${env.development ? 'development' : 'production'}`;
    return {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        target: 'web',
        mode: environment,
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `./${env.development ? 'src' : 'dist'}/index.html`),
            }),
            new CleanWebpackPlugin(),
            new Dotenv({ path: `./.env.${environment}` }),
        ],
        devServer: {
            static: path.join(__dirname, './src'),
            port: 3000,
            hot: true,
            compress: true,
            open: true,
            historyApiFallback: true,
            allowedHosts: ['localhost', '.merisaarinen.tech', 'merisaarinen-web.azurewebsites.net'],
        },
        externals: {
            // You can use `false` or other values if you need something strange here,example will output `module.exports = {};`
            'node:path': '{}',
        },
    };
};
