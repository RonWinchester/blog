import type { Meta, StoryObj } from "@storybook/react";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import AboutPage from "./AboutPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AboutPage> = {
    title: "pages/AboutPage",
    component: AboutPage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StylePageDecorator, StoreDecorator({})],
};

export const Dark: Story = {
    decorators: [
        StylePageDecorator,
        ThemeDecorator(Theme.DARK),
        StoreDecorator({}),
    ],
};
