const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
        devtool: isProduction ? false : 'source-map',
        entry: {
            main: './src/js/custom.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    implementation: require("sass"),
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './css/[name].css',
            }),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: isProduction ? [new TerserPlugin()] : [],
        },
    };
};