import { screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
	test("have text", () => {
		ComponentRender(<Sidebar />);
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});
});
