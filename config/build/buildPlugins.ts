import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPLugins(
	paths: BuildPaths,
	isDev: boolean
): webpack.WebpackPluginInstance[] {
	return [
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
		}),
		new webpack.HotModuleReplacementPlugin(),
		isDev && new ReactRefreshWebpackPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false
		})
	];
}
