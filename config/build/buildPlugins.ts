import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type {IsDev, BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions, isDev: IsDev): Configuration['plugins'] {

    const { paths } = options;

    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, paths.html),
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // медленный
        isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean)
}