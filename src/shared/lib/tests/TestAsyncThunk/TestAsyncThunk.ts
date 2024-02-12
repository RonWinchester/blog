/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

type ActionType<R, A, T> = (arg: A) => AsyncThunkAction<R, A, {rejectValue: T}>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios);
export class TestAsyncThunk<Return, Arg, RejectValue> {
	public dispatch: jest.MockedFunction<Dispatch>;
	public getState: () => StateSchema;
	public action: ActionType<Return, Arg, RejectValue>;
	public api: jest.MockedFunctionDeep<AxiosStatic>;
	public navigate: jest.MockedFn<any>;
	constructor(action: ActionType<Return, Arg, RejectValue>) {
		this.action = action;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.navigate = jest.fn();
		this.api = mockedAxios;
	}

	public async callThunk(arg: Arg) {
		const action = this.action(arg);
		const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
		return result
	}
}
