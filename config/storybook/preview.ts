import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import "../../src/app/styles/index.scss";
import type { Preview } from "@storybook/react";
import { Theme } from "../../src/shared/config/theme/ThemeContext";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
