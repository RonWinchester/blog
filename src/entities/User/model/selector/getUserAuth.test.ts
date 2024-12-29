import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { UserSchema } from "../types/userSchema";
import { getUserInited } from "./getUserInited";

describe("getUserInited.test", () => {
    test("getUserInited", () => {
        const data: UserSchema = {
            _inited: true,
        };

        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };
        expect(getUserInited(state as StateSchema)).toEqual(data._inited);
    });
});
