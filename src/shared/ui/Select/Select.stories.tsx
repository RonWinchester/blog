import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        options: [
            { value: "123", content: "Первый пункт" },
            { value: "1234", content: "Второй пункт" },
        ],
    },
};
