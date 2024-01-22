import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

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
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "123",
				password: "123",
			},
		}),
	],
};

export const Dark: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: {
				username: "123",
				password: "123",
			},
		}),
	],
};

export const WithError: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "123",
				password: "123",
				error: "Error",
			},
		}),
	],
};

export const IsLoading: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
};
