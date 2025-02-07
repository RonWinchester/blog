import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPLugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev, apiUrl, project } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
            publicPath: "/",
        },
        plugins: buildPLugins(paths, isDev, apiUrl, project),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
