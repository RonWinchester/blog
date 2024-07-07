import { StateSchema } from "app/providers/StoreProvider";
import { LIMIT_PAGE_GRID } from "shared/const/const";

const getArticlesListIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;
const getArticleListError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesListView = (state: StateSchema) => state.articlesPage?.view;
const getArticleListLimit = (state: StateSchema) => state.articlesPage?.limit || LIMIT_PAGE_GRID;
const getArticleListHasMore = (state: StateSchema) =>
	state.articlesPage?.hasMore;
const getArticlesListPage = (state: StateSchema) => state.articlesPage?.page || 1;

export {
	getArticlesListIsLoading,
	getArticleListError,
	getArticlesListView,
	getArticleListLimit,
	getArticleListHasMore,
	getArticlesListPage,
};
