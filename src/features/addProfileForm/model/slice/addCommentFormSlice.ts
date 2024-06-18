import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentsFormSchema } from "../types/addCommentsForm";

const initialState: AddCommentsFormSchema = {
	text: "",
	error: undefined,
};

export const loginSlice = createSlice({
	name: "addCommentsForm",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
	extraReducers: (builder) => {
		// builder
		// 	.addCase(loginByUsername.pending, (state) => {
		// 		state.text = "";
		// 		state.error = undefined;
		// 	})
		// 	.addCase(loginByUsername.fulfilled, (state) => {
		// 		state.isLoading = false;
		// 	})
		// 	.addCase(loginByUsername.rejected, (state, action) => {
		// 		state.isLoading = false;
		// 		state.error = action.payload as string;
		// 	});
	},
});

export const { actions: addCommentFormActions } = loginSlice;
export const { reducer: addCommentFormReducer } = loginSlice;
