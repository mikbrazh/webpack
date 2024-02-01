import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { IsDev } from '../types/types';

export function buildPlugins(isDev: IsDev) {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../public', 'index.html'),
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // медленный
        isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean)
}