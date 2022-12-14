const path = require('path');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/App.ts',
    target: 'node',
    node: {
        __dirname: true,
        __filename: true
    },
    output: {
        path: __dirname + '/public/',
        // path: path.resolve(__dirname, 'temp', 'scripts'),
        filename: 'index.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@src': path.resolve(__dirname, '/src'),
            '@src/*': path.resolve(__dirname, '/src/*'),
            '@config': path.resolve(__dirname, '/src/config'),
            '@common': path.resolve(__dirname, '/src/common'),
            '@controller': path.resolve(__dirname, 'src/controller'),
            '@model': path.resolve(__dirname, 'src/model'),
        }
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },
    plugins: [
        // new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
        new CopyPlugin({
            patterns: [
                { from: "src/startup/resources/views", to: "views" },
                { from: "src/startup/resources/assets", to: "assets" },
            ],
        }),
    ],
};