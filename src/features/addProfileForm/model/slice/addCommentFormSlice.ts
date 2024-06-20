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
});

export const { actions: addCommentFormActions } = loginSlice;
export const { reducer: addCommentFormReducer } = loginSlice;
