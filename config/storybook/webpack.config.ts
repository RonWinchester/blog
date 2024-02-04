import path from "path";
import { DefinePlugin, RuleSetRule } from "webpack";
import { WebpackConfiguration } from "webpack-dev-server";
import { buildCssLoaders } from "../build/loadres/buildCssLoaders";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: WebpackConfiguration }) => {
	const paths: BuildPaths = {
		entry: "",
		html: "",
		output: "",
		src: path.resolve(__dirname, "..", "..", "src"),
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push(".ts", ".tsx");

	// eslint-disable-next-line no-param-reassign
	if (config.module) {
		const rule = config.module.rules as [RuleSetRule];
		config.module.rules = rule.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});
	}

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	});

	config.module?.rules?.push(buildCssLoaders(true));
	config.plugins?.push(
		new DefinePlugin({
			__IS__DEV__: true,
			__API__: JSON.stringify(""),
		})
	);
	return config;
};
