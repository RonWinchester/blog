import type { Meta, StoryObj } from "@storybook/react";

import { CountrySelect } from "./CountrySelect";

const meta: Meta<typeof CountrySelect> = {
    title: "entities/CountrySelect",
    component: CountrySelect,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
