import webpack from "webpack";
export function buildLoaders(): webpack.RuleSetRule[] {
	const typesciptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [typesciptLoader];
}
