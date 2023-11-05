import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("button", () => {
	test("have text", () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button>Test</Button>);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("have theme", () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
		expect(screen.getByRole("button")).toHaveClass("clear");
	});
});
