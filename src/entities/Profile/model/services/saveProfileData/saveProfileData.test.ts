import { saveProfileData } from "./saveProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

jest.mock("axios");

describe("saveProfileData.test", () => {
	const userValue = {
		data: {
			firstname: "Roman12333",
			lastname: "lastname",
			age: 2,
			currency: Currency.USD,
			country: Country.BY,
			city: "spb",
			username: "admin",
			avatar: "https://mui.com/static/images/avatar/1.jpg",
		},
	};

	test("saveProfileData", async () => {
		const thunk = new TestAsyncThunk(saveProfileData, {
			profile: {
				formData: userValue.data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await thunk.callThunk();
		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(userValue);
	});

	test("saveProfileData with error", async () => {
		const thunk = new TestAsyncThunk(saveProfileData);

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
