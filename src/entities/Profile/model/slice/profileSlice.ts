import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/ProfileSchema";

const initialSlice: ProfileSchema = {
	data: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState: initialSlice,
	reducers: {
		setProfileData: (state, action: PayloadAction<Profile>) => {
			state.data = action.payload;
		},
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
