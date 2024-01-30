type Mode = 'production' | 'development';

interface EnvVariables {
    mode:
}

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env: any, argv: any) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        // mode: 'development',
        // entry: './src/index.js',
        // entry: {
        //     default: path.resolve(__dirname, 'src', 'index.js'),
        //     feature: path.resolve(__dirname, 'src', 'feature.js'),
        // },
        // entry: path.resolve(__dirname, 'src', 'index.js'),
        entry: path.resolve(__dirname, 'src', 'index.ts'), // порядок для резолва важен. Будет пытаться разрезолвить по порядку
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
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // регулярка
                    use: 'ts-loader', // какой лоадер используем
                    exclude: /node_modules/, // исключения
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'], // Чтобы не указывать расширение у файлов
        },
    };

    return config;
};