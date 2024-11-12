import { Profile } from "entities/Profile/model/types/ProfileSchema";

export interface ProfileSchema {
	data?: Profile;
	formData?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	validateErrors?: ValidetaProfileErrorCode[];
}

export enum ValidetaProfileErrorCode {
	INCORRECT_FIRSTNAME = "INCORRECT_FIRSTNAME",
	INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
	INCORRECT_AGE = "INCORRECT_AGE",
	INCORRECT_USERNAME = "INCORRECT_USERNAME",
	INCOORECT_SERVER_ERROR = "INCOORECT_SERVER_ERROR",
	INCORRECT_NO_DATA = "INCORRECT_NO_DATA",
}
