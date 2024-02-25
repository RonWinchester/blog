import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
	title: "shared/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: "https://source.unsplash.com/random",
	},
};

export const WithSize: Story = {
	args: {
		src: "https://source.unsplash.com/random",
        size: 100,
	},
};
