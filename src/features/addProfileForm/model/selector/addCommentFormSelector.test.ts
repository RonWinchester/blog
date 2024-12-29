import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormText } from ".";

describe("addCommentFormSelector", () => {
    test("getAddCommentFormError", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: "error",
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
    });
    test("getAddCommentFormText", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: "some text",
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            "some text",
        );
    });
});
