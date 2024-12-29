import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Button",
    },
};

export const Clear: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const Background_inverted: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Size_s: Story = {
    args: {
        children: "Button",
        size: ButtonSize.S,
    },
};

export const Size_m: Story = {
    args: {
        children: "Button",
        size: ButtonSize.M,
    },
};

export const Size_l: Story = {
    args: {
        children: "Button",
        size: ButtonSize.L,
    },
};

export const Disabled: Story = {
    args: {
        children: "Button",
        size: ButtonSize.L,
        disabled: true,
    },
};
