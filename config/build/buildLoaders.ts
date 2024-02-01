import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { IsDev } from '../types/types';

export function buildLoaders(isDev: IsDev) {
    return [
        // порядок важен
        {
            // test: /\.css$/i,
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        {
            // ts-loader умеет обрабатывать JSX. Если бы его не было (если бы мы не использовали typescript), с реактом пришлось бы устанавливать Babel loader
            test: /\.tsx?$/, // регулярка
            use: 'ts-loader', // какой лоадер используем
            exclude: /node_modules/, // исключения
        },
    ]
}