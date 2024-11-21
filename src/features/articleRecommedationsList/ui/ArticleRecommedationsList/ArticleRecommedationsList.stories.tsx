import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/config/theme/ThemeContext";

import { ArticleRecommedationsList } from "./ArticleRecommedationsList";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "entities/Article";

const meta: Meta<typeof ArticleRecommedationsList> = {
	title: "features/ArticleRecommedationsList",
	component: ArticleRecommedationsList,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
	id: "1",
	img: "",
	createdAt: "",
	views: 123,
	user: { id: "1", username: "123" },
	blocks: [],
	type: [],
	title: "123",
	subtitle: "asfsa",
	updatedAt: "",
};

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
	parameters: {
		mockData: [
			{
				url: `${__API__}/articles?_limit=4`,
				method: "GET",
				status: 200,
				response: [
					{ ...article, id: "1" },
					{ ...article, id: "2" },
					{ ...article, id: "3" },
					{ ...article, id: "4" },
				],
			},
		],
	},
};

export const Dark: Story = {
	args: {},
	decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
	parameters: {
		mockData: [
			{
				url: `${__API__}/articles?_limit=4`,
				method: "GET",
				status: 200,
				response: [
					{ ...article, id: "1" },
					{ ...article, id: "2" },
					{ ...article, id: "3" },
					{ ...article, id: "4" },
				],
			},
		],
	},
};
