// webpack.config.cjs
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000, // or your desired port
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            writeToDisk: true,
        },
        historyApiFallback: true,
        open: true,
        liveReload: true,
        compress: true,
        setupMiddlewares: (middlewares, devServer) => {
            devServer.app.use((req, res, next) => {
                try {
                    decodeURIComponent(req.url);
                    next();
                } catch (e) {
                    res.status(400).send("Malformed URI");
                }
            });
            return middlewares;
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader',   // Translates CSS into CommonJS
                    'sass-loader',  // Compiles Sass to CSS
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            pages: path.resolve(__dirname, 'src/pages/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
