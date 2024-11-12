import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileFormdata } from "./getProfileFormdata";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfileFormdata.test", () => {
	test("getProfileFormdata", () => {
        const data = {
            firstname: "Roman12333",
            lastname: "lastname",
            age: 2,
            currency: Currency.USD,
            country: Country.BY,
            city: "spb",
            username: "admin",
            avatar: "https://mui.com/static/images/avatar/1.jpg",
        }
		const state: DeepPartial<StateSchema> = {
			profile: {
				formData: {
					firstname: "Roman12333",
					lastname: "lastname",
					age: 2,
					currency: Currency.USD,
					country: Country.BY,
					city: "spb",
					username: "admin",
					avatar: "https://mui.com/static/images/avatar/1.jpg",
				},
			},
		};
		expect(getProfileFormdata(state as StateSchema)).toEqual(data);
	});
	test("getProfileFormdata with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileFormdata(state as StateSchema)).toEqual(undefined);
	});
});
