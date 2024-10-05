import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
	title: "shared/ListBox",
	component: ListBox,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		items: [
			{ value: "123", content: "123" },
			{ value: "1234", content: "1234", disabled: true },
			{ value: "12345", content: "12345" },
		],
		value: "123",
		onChange: action("onChange"),
		defaultValue: "12345",
		label: "Label",
	},
};
