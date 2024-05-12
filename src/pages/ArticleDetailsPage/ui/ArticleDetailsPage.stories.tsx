import type { Meta, StoryObj } from "@storybook/react";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import ArticleDetailsPage from "./ArticleDetailsPage";

const meta: Meta<typeof ArticleDetailsPage> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: [StylePageDecorator] };

export const Dark: Story = {
	decorators: [StylePageDecorator, ThemeDecorator(Theme.DARK)],
};
