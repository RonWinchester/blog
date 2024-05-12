import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

const meta: Meta<typeof ArticleCodeBlockComponent> = {
	title: "shared/ArticleCodeBlockComponent",
	component: ArticleCodeBlockComponent,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
