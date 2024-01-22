import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("authByUsername", () => {
	test("getLoginError", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "error",
			},
		};
		expect(getLoginError(state as StateSchema)).toEqual("error");
	});
	test("getLoginError with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginError(state as StateSchema)).toEqual("");
	});
});
