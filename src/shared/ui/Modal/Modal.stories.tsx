import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "shared/config/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
        loki: { skip: true },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: "Главная",
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: "Главная",
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
