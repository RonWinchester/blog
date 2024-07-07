import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";
import { Text } from "shared/ui/Text/Text";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
	title: "shared/Card",
	component: Card,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		children: <Text title="test" text="text text" />,
	},
};

export const Dark: Story = {
	args: {
		children: <Text title="test" text="text text" />,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
