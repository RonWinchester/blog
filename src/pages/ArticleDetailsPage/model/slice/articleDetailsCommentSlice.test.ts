import { DeepPartial } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema";
import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";
import { CommentItem } from "entities/Comment/model/types/comment";

describe("articleSlice.test", () => {
	const data: CommentItem[] =[ {
		id: "1",
		text: "text",
		user: {
			id: "1",
			username: "user",
		},
	}];
	test("fetchCommentsByArticleId pending", () => {
		const state: DeepPartial<ArticleDetailsCommentSchema> = {
			isLoading: false,
			error: undefined,
		};
		expect(
			articleDetailsCommentReducer(
				state as ArticleDetailsCommentSchema,
				fetchCommentsByArticleId.pending
			)
		).toEqual({
			isLoading: true,
			error: undefined,
		});
	});
	test("fetchCommentsByArticleId server fulfilled", () => {
		const state: DeepPartial<ArticleDetailsCommentSchema> = {
			isLoading: true,
			error: undefined,
		};
		expect(
			articleDetailsCommentReducer(
				state as ArticleDetailsCommentSchema,
				fetchCommentsByArticleId.fulfilled(data as CommentItem[], "1", "")
			)
		).toEqual({
			isLoading: false,
			ids: ["1"],
			entities: { 1: data[0] },
			error: undefined,
		});
	});
	test("fetchCommentsByArticleId server rejected", () => {
		const state: DeepPartial<ArticleDetailsCommentSchema> = {
			isLoading: true,
			error: undefined,
		};
		const error = new Error("1");
		expect(
			articleDetailsCommentReducer(
				state as ArticleDetailsCommentSchema,
				fetchCommentsByArticleId.rejected(error, "1", "")
			)
		).toEqual({
			isLoading: false,
			error: undefined,
		});
	});
});
