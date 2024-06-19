import { CommentItem } from "entities/Comment";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

describe("fetchCommentsByArticleId.test", () => {
	const data: CommentItem[] = [
		{
			id: "1",
			text: "text",
			user: {
				id: "1",
				username: "user",
			},
		},
	];

	test("fetchCommentsByArticleId", async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk("1");
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("fetchCommentsByArticleId with error", async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk("1");
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
