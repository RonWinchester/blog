import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Dropdown } from "./Dropdown";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            { content: "123", onClick: action("click") },
            { content: "1234", disabled: true },
            { content: "12345" },
        ],
        trigger: <Button theme={ButtonTheme.CLEAR}>Trigger</Button>,
    },
};
