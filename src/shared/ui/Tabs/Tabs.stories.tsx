import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Tabs } from "./Tabs";
import { action } from "@storybook/addon-actions";
import { ArticleType } from "entities/Article/model/types/article";

const meta: Meta<typeof Tabs> = {
	title: "shared/Tabs",
	component: Tabs,
	parameters: {
		loki: { skip: true },
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsLight: Story = {
	args: {
		tabs: [
			{
				value: ArticleType.ALL,
				content: "Tab 1",
			},
			{
				value: ArticleType.IT,
				content: "Tab 2",
			},
		],
		value: "1",
		onTabClick: action("onTabClick"),
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TabsDark: Story = {
	args: {
		tabs: [
			{
				value: ArticleType.ALL,
				content: "Tab 1",
			},
			{
				value: ArticleType.IT,
				content: "Tab 2",
			},
		],
		value: "2",
		onTabClick: action("onTabClick"),
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
