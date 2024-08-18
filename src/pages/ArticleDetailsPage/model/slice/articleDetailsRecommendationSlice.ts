import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

import { ArticleDetailsRecommendationSchema } from "../types/ArticleDetailsRecommendation";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationAdapter = createEntityAdapter({
	selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
	recommendationAdapter.getSelectors<StateSchema>(
		(state) =>
			state.articleDetailsPage?.recommendations ||
			recommendationAdapter.getInitialState()
	);

const articleDetailsRecommendationSlice = createSlice({
	name: "articleDetailsRecommendationSlice",
	initialState:
		recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
			isLoading: false,
			error: undefined,
			ids: [],
			entities: {},
		}),
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(
				fetchArticleRecommendations.fulfilled,
				(state, action: PayloadAction<Article[]>) => {
					state.isLoading = false;
					recommendationAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsRecommendationReducer } =
	articleDetailsRecommendationSlice;
