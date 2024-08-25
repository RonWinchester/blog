import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
jest.mock("../fetchArticlesList/fetchArticlesList");

describe("initArticlesPage.test", () => {
	const params: URLSearchParams = new URLSearchParams();

	beforeEach(() => {
		params.set("order", "asc");
	});
	test("on init", async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				_inited: false,
			},
		});
		await thunk.callThunk(params);
		expect(thunk.dispatch).toHaveBeenCalledTimes(8);
	});
	afterEach(() => {
		params.delete("order");
	});

	test("on not init", async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				_inited: true,
			},
		});
		await thunk.callThunk(params);
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toBeCalled();
	});

	test("without params", async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				_inited: true,
			},
		});
		await thunk.callThunk(params);
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
	});
});
