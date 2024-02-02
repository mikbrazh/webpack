import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { IsDev } from './types/types';

export function buildLoaders(isDev: IsDev): ModuleOptions['rules'] {

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        {
            test: /\.css$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        // порядок важен
        scssLoader,
        {
            // ts-loader умеет обрабатывать JSX. Если бы его не было (если бы мы не использовали typescript), с реактом пришлось бы устанавливать Babel loader
            test: /\.tsx?$/, // регулярка
            use: 'ts-loader', // какой лоадер используем
            exclude: /node_modules/, // исключения
        },
    ]
}