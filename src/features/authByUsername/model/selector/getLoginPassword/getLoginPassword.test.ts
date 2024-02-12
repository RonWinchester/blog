import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("authByUsername", () => {
	test("getLoginPassword", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "password",
				username: "username",
				isLoading: false,
			},
		};
		expect(getLoginPassword(state as StateSchema)).toEqual("password");
	});
	test("getLoginPassword with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual("");
	});
});
