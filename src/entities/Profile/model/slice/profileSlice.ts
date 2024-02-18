import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/ProfileSchema";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { saveProfileData } from "../services/saveProfileData/saveProfileData";

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
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelUpdate: (state) => {
			state.readonly = true;
			state.formData = state.data;
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.formData = {
				...state.formData,
				...action.payload,
			};
		},
	},
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
					state.formData = action.payload;
				}
			)
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(saveProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(
				saveProfileData.fulfilled,
				(state, action: PayloadAction<Profile>) => {
					state.readonly = true;
					state.isLoading = false;
					state.data = action.payload;
					state.formData = action.payload;
				}
			)
			.addCase(saveProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
