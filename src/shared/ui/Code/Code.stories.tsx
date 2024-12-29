import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { Code } from "./Code";
import { ArticleBlockType } from "entities/Article/model/types/article";

const meta: Meta<typeof Code> = {
    title: "shared/Code",
    component: Code,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        block: {
            type: ArticleBlockType.CODE,
            id: "1",
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
};

export const Dark: Story = {
    args: {
        block: {
            type: ArticleBlockType.CODE,
            id: "1",
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
