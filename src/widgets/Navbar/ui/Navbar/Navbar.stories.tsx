import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "shared/config/theme/ThemeContext";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widget/Navbar",
    component: Navbar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {
                authData: {
                    username: "123",
                    id: "123",
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {
                    username: "123",
                    id: "123",
                },
            },
        }),
    ],
};

export const NoAuth: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
