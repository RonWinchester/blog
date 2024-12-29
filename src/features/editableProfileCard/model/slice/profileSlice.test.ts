import { DeepPartial } from "@reduxjs/toolkit";
import { profileReducer, profileActions } from "./profileSlice";
import { Profile } from "../../../../entities/Profile/model/types/ProfileSchema";
import { ProfileSchema } from "../types/editableProfileCardSchema";
import { ValidetaProfileErrorCode } from "../types/editableProfileCardSchema";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { saveProfileData } from "../services/saveProfileData/saveProfileData";

describe("profileSlice.test", () => {
    const data = {
        firstname: "Roman12333",
        lastname: "lastname",
        age: 2,
        currency: Currency.USD,
        country: Country.BY,
        city: "spb",
        username: "admin",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
    };
    test("return set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });
    test("cancel Update", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            formData: { username: "" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelUpdate(),
            ),
        ).toEqual({
            readonly: true,
            formData: data,
            data,
            validateErrors: undefined,
        });
    });
    test("update Profile", () => {
        const state: DeepPartial<ProfileSchema> = {
            formData: {
                firstname: "Roman12333",
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ firstname: "123" }),
            ),
        ).toEqual({
            formData: {
                firstname: "123",
            },
        });
    });
    test("test update Profile server pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidetaProfileErrorCode.INCOORECT_SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, saveProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test("test update Profile server fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                saveProfileData.fulfilled(data as Profile, ""),
            ),
        ).toEqual({
            readonly: true,
            isLoading: false,
            data,
            formData: data,
            validateErrors: undefined,
        });
    });
});
