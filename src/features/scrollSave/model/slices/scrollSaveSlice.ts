import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSchema } from "../types/scrollSaveSchhema";

const initialState: ScrollSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
