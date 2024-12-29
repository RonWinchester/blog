import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { LoginModal } from "./LoginModal";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginModal> = {
    title: "features/LoginModal",
    component: LoginModal,
    parameters: {
        layout: "centered",
        loki: { skip: true },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                isLoading: false,
            },
        }),
    ],
};

export const Dark: Story = {
    args: { isOpen: true },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                isLoading: false,
            },
        }),
    ],
};
