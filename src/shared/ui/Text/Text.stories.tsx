import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
	parameters: {
		loki: { skip: true },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextComponent: Story = {
	args: {
		title: "Главная",
		text: "Description",
	},
};

export const TitleOnly: Story = {
	args: {
		title: "Главная",
	},
};

export const TextOnly: Story = {
	args: {
		text: "Главная",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextError: Story = {
	args: {
		title: "Главная",
		text: "Description",
		theme: TextTheme.ERROR,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
