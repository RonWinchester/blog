import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
    test("getProfileError", () => {
        const data = {
            error: "error",
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(data.error);
    });
    test("getProfileError with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
