import path from 'path';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { EnvVariables, IsDev } from '../types/types';

export function buildWebpack(env: EnvVariables): webpack.Configuration {

    const isDev: IsDev = env.mode === 'development';

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
        entry: path.resolve(__dirname, '../../src', 'index.tsx'), // порядок для резолва важен. Будет пытаться разрезолвить по порядку
        output: {
            //   filename: 'bundle.js',
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: buildPlugins(isDev),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'], // Чтобы не указывать расширение у файлов
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(env) : undefined,
    };

}