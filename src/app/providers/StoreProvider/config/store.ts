import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./StateSchema";
import { $axios } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?: (to: To, options?: NavigateOptions) => void) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS__DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: {
			extraArgument: {
				api: $axios,
				navigate
			}
		} }),
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];