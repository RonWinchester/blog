import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Skeleton } from "./Skeleton";
import { Theme } from "shared/config/theme/ThemeContext";

const meta: Meta<typeof Skeleton> = {
	title: "shared/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		width: '100%',
		height: "200px",
	},
};

export const Circle: Story = {
	args: {
		borderRadius: "50%",
		width: "100px",
		height: "100px",
	},
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		width: "100%",
		height: "200px",
	},
};