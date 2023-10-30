import type { Meta, StoryObj } from "@storybook/react";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import ErrorPage from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
	title: "pages/ErrorPage",
	component: ErrorPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: [StylePageDecorator] };

export const Dark: Story = {
	decorators: [StylePageDecorator, ThemeDecorator(Theme.DARK)],
};
