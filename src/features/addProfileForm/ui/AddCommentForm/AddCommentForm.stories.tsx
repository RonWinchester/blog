import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

const meta: Meta<typeof AddCommentForm> = {
	title: "features/AddCommentForm",
	component: AddCommentForm,
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
			addCommentForm: {
				text: "some text",
				error: undefined,
			},
		}),
	],
};

export const Dark: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			addCommentForm: {
				text: "some text",
				error: undefined,
			},
		}),
	],
};

export const WithError: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			addCommentForm: {
				text: "some text",
				error: undefined,
			},
		}),
	],
};

export const error: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			addCommentForm: {
				text: "some text",
				error: "Поле обязательно для заполнения",
			},
		}),
	],
};
