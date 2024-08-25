import { StateSchema } from "app/providers/StoreProvider";

const getArticleRecommendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations?.isLoading || false;

const getArticleRecommendationsError = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations?.error;

export { getArticleRecommendationsIsLoading, getArticleRecommendationsError };
