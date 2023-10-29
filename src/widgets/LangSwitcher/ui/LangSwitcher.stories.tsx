import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
	title: "widget/LangSwitcher",
	component: LangSwitcher,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};
