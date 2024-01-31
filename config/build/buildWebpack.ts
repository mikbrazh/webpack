import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildLoaders } from './buildLoaders';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildWebpack(): webpack.Configuration {

    const isDev = env.mode === 'development';

    return {
        mode: env.mode ?? 'development',
        // mode: 'development',
        // entry: './src/index.js',
        // entry: {
        //     default: path.resolve(__dirname, 'src', 'index.js'),
        //     feature: path.resolve(__dirname, 'src', 'feature.js'),
        // },
        // entry: path.resolve(__dirname, 'src', 'index.js'),
        // entry: path.resolve(__dirname, 'src', 'index.ts'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // порядок для резолва важен. Будет пытаться разрезолвить по порядку
        output: {
            //   filename: 'bundle.js',
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            // медленный
            isDev && new webpack.ProgressPlugin(),
        ].filter(Boolean),
        module: {
            rules: buildLoaders(),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'], // Чтобы не указывать расширение у файлов
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            // static: {
            //     directory: path.join(__dirname, 'public'),
            // },
            compress: true,
            port: env.port ?? 5000,
            open: true,
        } : undefined,
    };

}