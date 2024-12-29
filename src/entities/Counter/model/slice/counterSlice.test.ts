import { CounterSchema } from "../types/counterSchema";
import { counterReducer, counterActions } from "./counterSlice";

describe("counter", () => {
    test("return counter increment", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
    test("return counter decrement", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test("empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
