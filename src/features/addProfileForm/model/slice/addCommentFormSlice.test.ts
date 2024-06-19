import { DeepPartial } from "@reduxjs/toolkit";
import { AddCommentsFormSchema } from "../types/addCommentsForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";


describe("addCommentFormSlice", () => {
	test("return set text", () => {
		const state: DeepPartial<AddCommentsFormSchema> = { text: "" };
		expect(
			addCommentFormReducer(state as AddCommentsFormSchema, addCommentFormActions.setText("text"))
		).toEqual({ text: "text" });
	});
});
