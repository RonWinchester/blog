import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentItem } from "entities/Comment";
import { getUserAuth } from "entities/User";
import { getAddCommentFormText } from "../selector";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { addCommentFormActions } from "../slice/addCommentFormSlice";

export const sendComment = createAsyncThunk<
	CommentItem,
	void,
	ThunkConfig<string>
>(
	"addCommentForm/sendComment",
	async (_, { rejectWithValue, dispatch, extra, getState }) => {
		const text = getAddCommentFormText(getState());
		const userData = getUserAuth(getState());
		const article = getArticleDetailsData(getState());

		if (!text || !userData || !article) {
			return rejectWithValue("no data");
		}

		try {
			const response = await extra.api.post<CommentItem>("/comments", {
				articleId: article.id,
				userId: userData.id,
				text,
			});

			if (!response.data) {
				throw new Error();
			}

            dispatch(addCommentFormActions.setText(""));

			return response.data;
		} catch (error) {
			return rejectWithValue("error");
		}
	}
);
