import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer,
			user: userReducer,
			loginForm: loginReducer,
		},
		devTools: __IS__DEV__,
		preloadedState: initialState,
	});
}
