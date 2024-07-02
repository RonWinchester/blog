import { StateSchema } from "app/providers/StoreProvider";

const getArticlesListIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;

const getArticleListError = (state: StateSchema) => state.articlesPage?.error;

const getArticlesListView = (state: StateSchema) => state.articlesPage?.view;

export { getArticlesListIsLoading, getArticleListError, getArticlesListView };
