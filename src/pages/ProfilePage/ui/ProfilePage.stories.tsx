import type { Meta, StoryObj } from "@storybook/react";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: [StylePageDecorator] };

export const Dark: Story = {
	decorators: [StylePageDecorator, ThemeDecorator(Theme.DARK)],
};
