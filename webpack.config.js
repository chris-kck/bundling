const path = require('path');

module.exports = {
    entry: './src/hello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'webpackOutput'),
    },
    mode: 'development',
    loader: {
        '.js': 'jsx',
        '.ts': 'ts'
    },
    optimization: {
        minimize: true,
    },
    devtool: 'source-map',
    watch: false,
    stats: true,
};