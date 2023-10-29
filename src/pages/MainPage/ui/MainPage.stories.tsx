import type { Meta, StoryObj } from "@storybook/react";
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

export const Light: Story = { decorators: [StylePageDecorator] };

export const Dark: Story = {
	decorators: [StylePageDecorator, ThemeDecorator(Theme.DARK)],
};
