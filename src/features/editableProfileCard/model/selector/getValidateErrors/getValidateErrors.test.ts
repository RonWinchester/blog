import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getValidateErrors } from "./getValidateErrors";
import { ValidetaProfileErrorCode } from "../../types/editableProfileCardSchema";
describe("getValidateErrors.test", () => {
    test("getValidateErrors", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidetaProfileErrorCode.INCORRECT_AGE],
            },
        };
        expect(getValidateErrors(state as StateSchema)).toEqual([
            ValidetaProfileErrorCode.INCORRECT_AGE,
        ]);
    });
    test("getValidateErrors with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
