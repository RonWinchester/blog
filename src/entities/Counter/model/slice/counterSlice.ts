import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            if (state && state.value !== undefined) {
                state.value += 1;
            } else {
                throw new Error("Invalid state object");
            }
        },
        decrement: (state) => {
            if (state && state.value !== undefined) {
                state.value -= 1;
            } else {
                throw new Error("Invalid state object");
            }
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
