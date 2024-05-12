import type { Meta, StoryObj } from "@storybook/react";

import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

const meta: Meta<typeof ArticleImageBlockComponent> = {
	title: "shared/ArticleImageBlockComponent",
	component: ArticleImageBlockComponent,
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
