import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';

import type { EnvVariables, IsDev, BuildPaths, BuildOptions } from './config/build/types/types';

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const options: BuildOptions = {
        port: env.port ?? 5500,
        mode: env.mode ?? 'development',
        paths,
    }

    const config: webpack.Configuration = buildWebpack(options);

    return config;

};