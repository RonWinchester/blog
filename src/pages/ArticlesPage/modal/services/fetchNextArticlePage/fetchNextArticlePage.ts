import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNumber,
} from "../../selectors/articlesPageSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../slice/artilcePageSlice";

export const fetchNextArticlePage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("articlesPage/fetchNextArticlePage", async (_, thunkApi) => {
	const {  dispatch } = thunkApi;
	const isLoading = getArticlesPageIsLoading(thunkApi.getState());
	const hasMore = getArticlesPageHasMore(thunkApi.getState());
	const page = getArticlesPageNumber(thunkApi.getState());

	if (hasMore && !isLoading) {
		dispatch(articlePageActions.setPage(page + 1));
		dispatch(
			fetchArticlesList({})
		);
	}
});
