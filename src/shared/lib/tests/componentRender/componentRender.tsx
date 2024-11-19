import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTest";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function ComponentRender(
	component: ReactNode,
	options: componentRenderOptions = {}
) {
	const { route = "/", initialState, asyncReducers } = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider
				initialState={initialState as StateSchema}
				asyncReducers={asyncReducers}
			>
				<I18nextProvider i18n={i18n}>{component}</I18nextProvider>,
			</StoreProvider>
		</MemoryRouter>
	);
}
