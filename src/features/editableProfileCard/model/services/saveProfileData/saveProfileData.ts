import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ValidetaProfileErrorCode } from "../../types/editableProfileCardSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { Profile } from "entities/Profile";
import { getProfileFormdata } from "../../selector/getProfileFormdata/getProfileFormdata";

export const saveProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidetaProfileErrorCode[]>
>("profile/saveProfileData", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileFormdata(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(
            "/profile/" + formData?.id,
            formData,
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([
            ValidetaProfileErrorCode.INCOORECT_SERVER_ERROR,
        ]);
    }
});
