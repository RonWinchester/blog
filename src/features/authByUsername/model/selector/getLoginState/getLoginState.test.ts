import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("authByUsername", () => {
	test("getLoginState", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "password",
				username: "username",
			},
		};
		expect(getLoginState(state as StateSchema)).toEqual({
			password: "password",
			username: "username",
		});
	});
	test("getLoginState with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginState(state as StateSchema)).toEqual(undefined);
	});
});