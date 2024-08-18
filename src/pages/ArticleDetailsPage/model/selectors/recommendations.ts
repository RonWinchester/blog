import { StateSchema } from "app/providers/StoreProvider";

const getArticleRecommendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsRecommendations?.isLoading || false;

const getArticleRecommendationsError = (state: StateSchema) =>
	state.articleDetailsRecommendations?.error;

export { getArticleRecommendationsIsLoading, getArticleRecommendationsError };
