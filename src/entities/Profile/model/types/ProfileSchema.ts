import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export interface ProfileSchema {
	data?: Profile;
	formData?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	validateErrors?: ValidetaProfileErrorCode[];
}

export interface Profile {
	firstname?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export enum ValidetaProfileErrorCode {
	INCORRECT_FIRSTNAME = "INCORRECT_FIRSTNAME",
	INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
	INCORRECT_AGE = "INCORRECT_AGE",
	INCORRECT_USERNAME = "INCORRECT_USERNAME",
	INCOORECT_SERVER_ERROR = "INCOORECT_SERVER_ERROR",
	INCORRECT_NO_DATA = "INCORRECT_NO_DATA",
}
