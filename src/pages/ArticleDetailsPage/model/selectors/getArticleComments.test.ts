import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "./comments";

describe("getArticleComments", () => {
    test("getAddCommentFormError", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: "error",
                    isLoading: false,
                    ids: [],
                    entities: {},
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
    });
    test("getArticleCommentsIsLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: "error",
                    isLoading: true,
                    ids: [],
                    entities: {},
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
});
