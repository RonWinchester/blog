import type { Meta, StoryObj } from "@storybook/react";
import { StylePageDecorator } from "shared/config/storybook/StylePageDecorator/StylePageDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        StylePageDecorator,
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: {
                formData: {
                    firstname: "Roman12333",
                    lastname: "lastname",
                    age: 2,
                    currency: Currency.USD,
                    country: Country.RU,
                    city: "spb",
                    username: "admin",
                    avatar: "https://mui.com/static/images/avatar/1.jpg",
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        StylePageDecorator,
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                formData: {
                    firstname: "Roman12333",
                    lastname: "lastname",
                    age: 2,
                    currency: Currency.USD,
                    country: Country.RU,
                    city: "spb",
                    username: "admin",
                    avatar: "https://mui.com/static/images/avatar/1.jpg",
                },
            },
        }),
    ],
};
