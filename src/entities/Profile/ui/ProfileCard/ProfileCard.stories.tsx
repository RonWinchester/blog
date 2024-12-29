import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const meta: Meta<typeof ProfileCard> = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            firstname: "Роман",
            lastname: "Белорусович",
            age: 156,
            currency: Currency.RUB,
            country: Country.BY,
            city: "Минск",
            username: "admin",
            avatar: "https://mui.com/static/images/avatar/1.jpg",
        },
    },
};

export const Error: Story = {
    args: {
        error: "error",
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
