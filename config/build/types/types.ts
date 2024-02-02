type Mode = 'production' | 'development';
type Port = number;

export type IsDev = boolean;

export interface EnvVariables {
    mode: Mode
    port: Port
}

export interface BuildPaths {
    output: string
    entry:  string
    html: string
    public: string
    src: string
}

export interface BuildOptions {
    port: number
    mode: 'development' | 'production'
    paths: BuildPaths
}



