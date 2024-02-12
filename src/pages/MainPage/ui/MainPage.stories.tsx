import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	decorators: [
		StylePageDecorator,
		StoreDecorator({
			loginForm: {
				username: "123",
				password: "123",
				isLoading: false
			},
		}),
	],
};

export const Dark: Story = {
	decorators: [
		StylePageDecorator,
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: {
				username: "123",
				password: "123",
				isLoading: false
			},
		}),
	],
};
