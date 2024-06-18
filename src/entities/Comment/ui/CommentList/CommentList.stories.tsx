import type { Meta, StoryObj } from "@storybook/react";

import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
	title: "entities/CommentList",
	component: CommentList,
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

export const Error: Story = {
	args: {},
};

export const Loading: Story = {
	args: {},
};
