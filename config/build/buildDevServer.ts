import type { EnvVariables } from '../types/types';

export function buildDevServer(env: EnvVariables) {
    return {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: env.port ?? 5000,
        open: true,
    }
}