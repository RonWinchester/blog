import { Country, Currency } from "shared/const/common";

export interface ProfileSchema {
	data?: Profile,
	isLoading?: boolean,
	error?: string,
	readonly: boolean
}

export interface Profile {
	firstname: string;
	lastname: string;
	age: number;
	currency: Currency;
	country: Country.RU;
	city: string;
	username: string;
	avatar: string;
}