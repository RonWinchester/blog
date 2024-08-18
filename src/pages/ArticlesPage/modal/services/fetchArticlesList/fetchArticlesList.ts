import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import {
	getArticlesPageLimit,
	getArticlesPageNumber,
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesType,
} from "../../selectors/articlesPageSelector";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import { ArticleType } from "entities/Article/model/types/article";

interface FetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	FetchArticlesListProps,
	ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;
	const limit = getArticlesPageLimit(getState());
	const search = getArticlesPageSearch(getState());
	const order = getArticlesPageOrder(getState());
	const sort = getArticlesPageSort(getState());
	const page = getArticlesPageNumber(getState());
	const type = getArticlesType(getState());

	try {
		addQueryParams({
			sort,
			order,
			search,
			type
		});
		const response = await extra.api.get<Article[]>(`/articles`, {
			params: {
				_expand: "user",
				_limit: limit,
				_page: page,
				q: search,
				_order: order,
				_sort: sort,
				type_like: type === ArticleType.ALL ? undefined : type, // необходимо для json-server
			},
		});
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		return rejectWithValue("error");
	}
});
