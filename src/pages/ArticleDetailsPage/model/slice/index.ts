import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentReducer
})