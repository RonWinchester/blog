import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

type ActionType<R, A, T> = (arg: A) => AsyncThunkAction<R, A, {rejectValue: T}>;


export class TestAsyncThunk<Return, Arg, RejectValue> {
	public dispatch: jest.MockedFunction<Dispatch>;
	public getState: () => StateSchema;
	public action: ActionType<Return, Arg, RejectValue>;
	constructor(action: ActionType<Return, Arg, RejectValue>) {
		this.action = action;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	public async callThunk(arg: Arg) {
		const action = this.action(arg);
		const result = await action(this.dispatch, this.getState, undefined);
		return result
	}
}
