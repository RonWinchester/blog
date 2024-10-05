export type BuildMode = "production" | "development";
export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
    locales: string,
    buildLocales: string
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
    apiUrl: string,
    project: 'storybook' | 'frontend' | 'jest'
}

export interface BuildEnv {
    port: number,
    mode: BuildMode,
    apiUrl: string
}