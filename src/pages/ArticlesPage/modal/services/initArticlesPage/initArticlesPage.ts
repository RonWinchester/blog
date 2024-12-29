import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../slice/artilcePageSlice";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import { ArticleType } from "entities/Article/model/types/article";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
    const { dispatch } = thunkApi;
    const inited = getArticlesPageInited(thunkApi.getState());

    if (!inited) {
        const order = searchParams.get("order") as string;
        const search = searchParams.get("search") as string;
        const sort = searchParams.get("sort") as string;
        const type = searchParams.get("type") as string;

        if (order || search || sort || type) {
            dispatch(
                articlePageActions.setOrder((order as SortOrder) || "asc"),
            );
            dispatch(articlePageActions.setSearch(search || ""));
            dispatch(
                articlePageActions.setSort(
                    (sort as ArticleSortField) || ArticleSortField.CREATED_AT,
                ),
            );
            dispatch(articlePageActions.setType(type as ArticleType));
        }

        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
