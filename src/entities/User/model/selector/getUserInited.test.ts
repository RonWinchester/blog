import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { User } from "../types/userSchema";
import { getUserAuth } from "./getUserAuth";

describe("getUserAuth.test", () => {
	test("getUserAuth", () => {
		const data: User = {
			id: "1",
			username: "admin",
		};
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "1",
					username: "admin",
				} as User,
			},
		};
		expect(getUserAuth(state as StateSchema)).toEqual(data);
	});
});
