module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		// "plugin:i18next/recommended",
		"plugin:storybook/recommended",
		"plugin:react-hooks/recommended"
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
		// {
		// 	files: ["**/src/**/*.test.{ts,tsx}"],
		// 	rules: {
		// 		"i18next/no-literal-string": "off",
		// 	},
		// },
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react", "i18next"],
	rules: {
		// indent: ["error", "tab"],
		// "i18next/no-literal-string": ["error", { markupOnly: true }],
		"react/display-name": "off",
	},
};
// TODO: перед деплоем на прод вернуть правило и проверить на переводы