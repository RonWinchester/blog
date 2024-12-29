import type { Meta, StoryObj } from "@storybook/react";

import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
    title: "entities/CommentList",
    component: CommentList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "some comment",
                user: {
                    id: "1",
                    username: "Roman",
                },
            },
            {
                id: "2",
                text: "some comment",
                user: {
                    id: "2",
                    username: "Vasya",
                },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
