import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export interface ProfileSchema {
	data?: Profile,
	formData? : Profile,
	isLoading?: boolean,
	error?: string,
	readonly: boolean
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