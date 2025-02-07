import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { Article } from "../types/article";

const initialSlice: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState: initialSlice,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
