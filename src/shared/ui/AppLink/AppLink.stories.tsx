import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: "Главная",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Dark: Story = {
    args: {
        children: "Главная",
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
