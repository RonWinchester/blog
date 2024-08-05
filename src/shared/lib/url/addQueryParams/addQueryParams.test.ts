import { getQueryParams } from "./addQueryParams";

describe("shared/lib/url/addQueryParams", () => {
	test("should add query params", () => {
		expect(getQueryParams({ param1: "value1", param2: "value2" })).toBe(
			"?param1=value1&param2=value2"
		);
	});

	test("should add query params without value", () => {
		expect(getQueryParams({ param1: undefined, param2: "value2" })).toBe(
			"?param2=value2"
		);
	});
});
