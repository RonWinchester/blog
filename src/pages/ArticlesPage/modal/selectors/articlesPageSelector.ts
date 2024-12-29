import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField } from "entities/Article";
import { ArticleType, ArticleView } from "entities/Article/model/types/article";
import { LIMIT_PAGE_GRID } from "shared/const/const";

const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.GRID;
const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || LIMIT_PAGE_GRID;
const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
const getArticlesPageNumber = (state: StateSchema) =>
    state.articlesPage?.page || 1;
const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited;
const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search;
const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? "asc";
const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED_AT;
const getArticlesType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;

export {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageLimit,
    getArticlesPageHasMore,
    getArticlesPageNumber,
    getArticlesPageInited,
    getArticlesPageSearch,
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesType,
};
