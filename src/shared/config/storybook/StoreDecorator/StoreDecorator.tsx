/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: any) =>
	(
		<StoreProvider initialState={state}>
			<StoryComponent />
		</StoreProvider>
	);
