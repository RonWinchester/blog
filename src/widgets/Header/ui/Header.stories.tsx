import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
	title: "widget/Header",
	component: Header,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
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
