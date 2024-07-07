import { StateSchema } from "app/providers/StoreProvider";
import { LIMIT_PAGE_GRID } from "shared/const/const";

const getArticlesPageIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || LIMIT_PAGE_GRID;
const getArticlesPageHasMore = (state: StateSchema) =>
	state.articlesPage?.hasMore;
const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;

export {
	getArticlesPageIsLoading,
	getArticlesPageError,
	getArticlesPageView,
	getArticlesPageLimit,
	getArticlesPageHasMore,
	getArticlesPageNumber,
	getArticlesPageInited
};
