import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "./fetchArticlesList";

describe("fetchArticlesList.test", () => {
	test("success", async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList);

        await thunk.callThunk({replace: true});
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
	});
    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({replace: true});
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
