import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
	title: "features/LoginForm",
	component: LoginForm,
	parameters: {
		layout: "centered",
		loki: { skip: true },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
