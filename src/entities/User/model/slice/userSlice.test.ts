import { DeepPartial } from "@reduxjs/toolkit";
import { userReducer, userActions } from "./userSlice";
import { UserSchema, User } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

describe("articleSlice.test", () => {
	const data: User = {
		id: "1",
		username: "admin",
	};
	test("setAuthData", () => {
		const state: DeepPartial<UserSchema> = {
			authData: undefined,
		};
		expect(
			userReducer(state as UserSchema, userActions.setAuthData(data))
		).toEqual({
			authData: data,
		});
	});
	beforeEach(() => {
		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
	});
	test("initAuthData", () => {
		const state: DeepPartial<UserSchema> = {
			_inited: false,
		};
		expect(
			userReducer(state as UserSchema, userActions.initAuthData())
		).toEqual({
			authData: data,
			_inited: true,
		});
	});
	afterEach(() => {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY);
	});
	test("logout", () => {
		const state: DeepPartial<UserSchema> = {
			authData: data,
		};
		expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
			authData: undefined,
		});
	});
});
