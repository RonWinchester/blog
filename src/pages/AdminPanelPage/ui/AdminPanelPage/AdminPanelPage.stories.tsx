import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import AdminPanelPage from "./AdminPanelPage";

const meta: Meta<typeof AdminPanelPage> = {
    title: "pages/AdminPanelPage",
    component: AdminPanelPage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: {}, decorators: [] };

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
