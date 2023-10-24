import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("button", () => {
	test("have text", () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button>Test</Button>);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("have theme", () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
		expect(screen.getByRole("button")).toHaveClass("clear");
	});
});
