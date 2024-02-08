import axios from "axios";
// import { userActions } from "entities/User";
import { loginByUsername } from "./loginByUsername";
// import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("authByUsername", () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// const userValue = { username: "123", id: "1" };

	// test("loginByUsername", async () => {
	// 	mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
	// 	const thunk = new TestAsyncThunk(loginByUsername);

	// 	const result = await thunk.callThunk({ username: "123", password: "123" });

	// 	// expect(mockedAxios.post).toHaveBeenCalled();
	// 	expect(thunk.dispatch).toHaveBeenCalledTimes(3);
	// 	expect(result.meta.requestStatus).toBe("fulfilled");
	// 	expect(thunk.dispatch).toHaveBeenCalledWith(
	// 		userActions.setAuthData(userValue)
	// 	);
	// 	expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBe(
	// 		JSON.stringify(userValue)
	// 	);
	// 	expect(result.payload).toEqual(userValue);
	// });

	test("loginByUsername with error", async () => {
		const errorText = "error";
		const thunk = new TestAsyncThunk(loginByUsername);

		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ username: "123", password: "123" });
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe(errorText);
	});
});
