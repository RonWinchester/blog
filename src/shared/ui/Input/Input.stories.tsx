import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";
import { Input } from "./Input";

const InputWrapper = () => {
	const [text, setText] = useState("");
	const handleText = (v: string) => {
		setText(v);
	};
	return <Input value={text} onChange={handleText} />;
};

const meta: Meta<typeof Input> = {
	title: "shared/Input",
	component: InputWrapper,
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
		onChange: () => {},
		placeholder: "some text",
	},
};

export const Dark: Story = {
	args: { value: "", onChange: () => {}, placeholder: "some text" },
	decorators: [ThemeDecorator(Theme.DARK)],
};
