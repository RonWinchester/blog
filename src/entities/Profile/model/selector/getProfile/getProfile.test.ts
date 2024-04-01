import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfile } from "./getProfile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfile.test", () => {
	test("getProfile", () => {
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
			},
		};
		expect(getProfile(state as StateSchema)).toEqual(data);
	});
	test("getProfile with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfile(state as StateSchema)).toEqual(undefined);
	});
});
