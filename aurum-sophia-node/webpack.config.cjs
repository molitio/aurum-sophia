require('webpack-dev-server');
const nodeExternals = require('webpack-node-externals');
const svgToMiniDataURI = require('mini-svg-data-uri');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

console.log(`processCwd: ${process.cwd()}`);
const images = {
    name: 'images',
    target: 'node',
    mode: 'production',
    entry: `${path.resolve(process.cwd())}/src/assets/data/index.js`,
    output: {
        path: path.resolve(`${process.cwd()}/dist/public/images`),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg$)$/,
                type: 'url-loader',
            },
        ],
    },
};

const data = {
    name: 'data',
    target: 'web',
    mode: 'production',
    entry: `${path.resolve(process.cwd())}/src/assets/images/index.js`,
    output: {
        path: path.resolve(`${process.cwd()}/dist/public/data`),
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
        ],
    },
};

/* const tsRules = [
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: 'tsconfig.[name].json',
                },
            },
        ],
    },
]; */

const client = {
    name: 'client',
    target: 'web',
    entry: {
        client: path.resolve(`${process.cwd()}/src/client/client.tsx`),
        dependOn: ['images'],
    },
    mode: 'production',
    output: {
        path: path.resolve(`${process.cwd()}/dist/public`),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.client.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};

/* 
const server = {
    name: 'server',
    target: 'node',
    entry: {
        index: path.resolve(`${process.cwd()}/src/index.ts`),
        dependOn: 'assets/images',
    },
    mode: 'production',
    output: {
        path: path.resolve(`${process.cwd()}/dist`),
        publicPath: 'public/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                          {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    }, 
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.server.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ context: 'server', from: 'views', to: 'views' }],
        }),
    ],
}; */

//module.exports = [client, server, assets];
module.exports = [images, data, client];
