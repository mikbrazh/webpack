import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    
    const { mode, paths } = options;
    
    const isDev  = mode === 'development';
    const isProd = mode === 'production';

    return {

        mode: mode ?? 'development',
        entry: paths.entry, // порядок для резолва важен. Будет пытаться разрезолвить по порядку
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        // plugins: buildPlugins(isDev, paths),
        plugins: buildPlugins(options, isDev),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'], // Чтобы не указывать расширение у файлов
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,

    };

}