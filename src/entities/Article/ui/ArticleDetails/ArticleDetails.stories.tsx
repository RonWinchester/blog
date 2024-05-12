import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetails } from "./ArticleDetails";

const meta: Meta<typeof ArticleDetails> = {
	title: "shared/ArticleDetails",
	component: ArticleDetails,
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
