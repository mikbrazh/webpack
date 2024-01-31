import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';
type Port = number;

interface EnvVariables {
    mode: Mode
    port: Port
}

export default (env: EnvVariables, argv: any) => {
    

    const config: webpack.Configuration = buildWebpack();

    return config;
};