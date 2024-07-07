import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
	getArticleListHasMore,
	getArticlesListIsLoading,
	getArticlesListPage,
} from "../../selectors/articlesList";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../slice/artilcePageSlice";

export const fetchNextArticlePage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("articlesPage/fetchNextArticlePage", async (_, thunkApi) => {
	const {  dispatch } = thunkApi;
	const isLoading = getArticlesListIsLoading(thunkApi.getState());
	const hasMore = getArticleListHasMore(thunkApi.getState());
	const page = getArticlesListPage(thunkApi.getState());

	if (hasMore && !isLoading) {
		dispatch(articlePageActions.setPage(page + 1));
		dispatch(
			fetchArticlesList({
				page: page + 1,
			})
		);
	}
});
