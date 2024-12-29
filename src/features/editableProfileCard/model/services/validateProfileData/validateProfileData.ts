import { Profile } from "entities/Profile";
import { ValidetaProfileErrorCode } from "../../types/editableProfileCardSchema";

export const validateProfileData = (data?: Profile) => {
    if (!data) {
        return [ValidetaProfileErrorCode.INCORRECT_NO_DATA];
    }

    const { age, lastname, firstname, username } = data;

    const errors: ValidetaProfileErrorCode[] = [];

    if (!firstname || firstname.length < 2) {
        errors.push(ValidetaProfileErrorCode.INCORRECT_FIRSTNAME);
    }

    if (!lastname || lastname.length < 2) {
        errors.push(ValidetaProfileErrorCode.INCORRECT_LASTNAME);
    }

    if (!username || username.length < 2) {
        errors.push(ValidetaProfileErrorCode.INCORRECT_USERNAME);
    }

    if (!age || (age < 10 && age > 120)) {
        errors.push(ValidetaProfileErrorCode.INCORRECT_AGE);
    }

    return errors;
};
