const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    name: 'client',
    entry: {
        client: './src/client/client.tsx',
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{ loader: 'file-loader' }],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};
