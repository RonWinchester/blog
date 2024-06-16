import { EntityState } from "@reduxjs/toolkit";
import { CommentItem } from "entities/Comment";

export interface ArticleDetailsCommentSchema extends EntityState<CommentItem> {
	isLoading?: boolean;
	error?: string;
}
