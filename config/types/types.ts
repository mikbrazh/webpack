type Mode = 'production' | 'development';
type Port = number;

export type IsDev = boolean;

export interface EnvVariables {
    mode: Mode
    port: Port
}