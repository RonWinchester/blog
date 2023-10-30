import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
	test("have text", () => {
		renderWithTranslation(<Sidebar />);
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("toggle", () => {
		renderWithTranslation(<Sidebar />);
		const toggleButton = screen.getByTestId("sidebar-toggle");
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		fireEvent.click(toggleButton);
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});
