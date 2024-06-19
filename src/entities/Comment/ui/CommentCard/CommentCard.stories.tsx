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
	args: {
		comment: {
			id: "1",
			text: "some comment",
			user: {
				id: "1",
				username: "Roman",
			},
		},
	},
};


export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
