import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/ProfileSchema";
import { fetchProfileData } from "../sevices/fetchProfileData/fetchProfileData";

const initialSlice: ProfileSchema = {
	data: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState: initialSlice,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(
				fetchProfileData.fulfilled,
				(state, action: PayloadAction<Profile>) => {
					state.isLoading = false;
					state.data = action.payload;
				}
			)
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
