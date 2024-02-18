import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/ProfileSchema";

export const fetchProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	try {
		const response = await extra.api.get<Profile>("/profile");

		console.log(response.data, "profile");
		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue("error");
	}
});
