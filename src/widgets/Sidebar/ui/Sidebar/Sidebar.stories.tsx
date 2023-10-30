import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
	title: "widget/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {decorators: [ThemeDecorator(Theme.LIGHT)],};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};
