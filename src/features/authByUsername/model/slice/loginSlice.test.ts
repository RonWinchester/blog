import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginReducer, loginActions } from "./loginSlice";

describe("loginSlice", () => {
    test("return set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "username" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("username"),
            ),
        ).toEqual({ username: "username" });
    });
    test("return set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "password" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("password"),
            ),
        ).toEqual({ password: "password" });
    });
});
