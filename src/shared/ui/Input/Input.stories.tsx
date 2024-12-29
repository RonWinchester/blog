import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        value: "",
        placeholder: "some text",
    },
};

export const Dark: Story = {
    args: { value: "", placeholder: "some text" },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: { value: "", placeholder: "some text", error: "some error" },
    decorators: [ThemeDecorator(Theme.DARK)],
};
