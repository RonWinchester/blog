import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentItem } from "entities/Comment";
import { getUserAuth } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentFormArticle = createAsyncThunk<
    CommentItem,
    string,
    ThunkConfig<string>
>(
    "articleDetails/addCommentFormArticle",
    async (text, { rejectWithValue, dispatch, extra, getState }) => {
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

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return rejectWithValue("error");
        }
    },
);
