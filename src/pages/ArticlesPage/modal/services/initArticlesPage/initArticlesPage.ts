import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
	getArticlesPageInited,
} from "../../selectors/articlesPageSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../slice/artilcePageSlice";

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
	const {  dispatch } = thunkApi;
	const inited = getArticlesPageInited(thunkApi.getState());

    if (!inited) {
        dispatch(articlePageActions.initState());
        dispatch(
            fetchArticlesList({
                page: 1,
            })
        );
    }
});
