import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";

export function buildPLugins(paths:BuildPaths):webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
	];
}
