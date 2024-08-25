import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";
import { articleDetailsRecommendationReducer } from "./articleDetailsRecommendationSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentReducer
})