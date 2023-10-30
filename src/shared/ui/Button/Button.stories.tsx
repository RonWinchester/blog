import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
	},
};

export const Clear: Story = {
	args: {
		children: "Button",
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: "Button",
		theme: ThemeButton.OUTLINE,
	},
};

