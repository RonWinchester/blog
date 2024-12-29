import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentItem } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentItem[],
    string | undefined,
    ThunkConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
        return rejectWithValue("error");
    }

    try {
        const response = await extra.api.get<CommentItem[]>(`/comments`, {
            params: {
                articleId,
                _expand: "user",
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
