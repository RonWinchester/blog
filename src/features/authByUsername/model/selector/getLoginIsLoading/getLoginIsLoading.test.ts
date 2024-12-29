import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("authByUsername", () => {
    test("getLoginIsLoading", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                password: "password",
                username: "username",
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("getLoginIsLoading with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
