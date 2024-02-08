import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPLugins(
	paths: BuildPaths,
	isDev: boolean,
	apiUrl: string
): webpack.WebpackPluginInstance[] {
	const plugins = [
		new webpack.ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
		}),
	];

	if (isDev) {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new ReactRefreshWebpackPlugin(),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			})
		);
	}

	return plugins;
}
