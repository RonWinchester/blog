import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
	title: "entities/CommentCard",
	component: CommentCard,
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
