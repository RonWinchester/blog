/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleSlice";

const defaultAsyncReducers: ReducerList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
		(StoryComponent: any) =>
			(
				<StoreProvider
					initialState={state}
					asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
				>
					<StoryComponent />
				</StoreProvider>
			);
