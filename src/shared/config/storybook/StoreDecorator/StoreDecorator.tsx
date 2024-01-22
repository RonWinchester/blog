/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
	) =>
		(StoryComponent: any) =>
			(
				<StoreProvider
					initialState={state}
					asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
				>
					<StoryComponent />
				</StoreProvider>
			);
