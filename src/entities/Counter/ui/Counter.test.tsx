import { screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";
describe("Counter", () => {
	test("have text", async () => {
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("value-title")).toHaveTextContent("10");
	});
	test("increment", async () => {
		const user = userEvent.setup();

		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		await user.click(screen.getByTestId("value-increment-btn"));
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("value-title")).toHaveTextContent("11");
	});
	test("decrement", async () => {
		const user = userEvent.setup();

		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		await user.click(screen.getByTestId("value-decrement-btn"));
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("value-title")).toHaveTextContent("9");
	});
});
