import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("authByUsername", () => {
    test("getLoginUsername", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "username",
                password: "password",
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("username");
    });
    test("getLoginUsername with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
