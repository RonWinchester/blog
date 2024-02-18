import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/ProfileSchema";
import { getProfileFormdata } from "../../selector/getProfileFormdata/getProfileFormdata";

export const saveProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
>("profile/saveProfileData", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const formData = getProfileFormdata(getState());

	try {
		const response = await extra.api.put<Profile>("/profile", formData);

		console.log(response.data, "profile");
		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue("error");
	}
});
