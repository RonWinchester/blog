import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Page } from "./Page";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Page> = {
    title: "shared/Page",
    component: Page,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: "Главная",
    },
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        children: "Главная",
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
