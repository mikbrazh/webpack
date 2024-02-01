import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';

import type { EnvVariables } from './config/types/types';

export default (env: EnvVariables) => {

    const config: webpack.Configuration = buildWebpack(env);

    return config;
};