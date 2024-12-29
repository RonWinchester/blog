import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidetaProfileErrorCode } from "../../types/editableProfileCardSchema";

jest.mock("axios");

describe("validateProfileData.test", () => {
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
    const errors: ValidetaProfileErrorCode[] = [];

    test("validateProfileData", async () => {
        const result = validateProfileData(userValue.data);
        expect(result).toEqual(errors);
    });

    test("validateProfileData with error", async () => {
        const userValue = {
            data: {
                firstname: "1",
                lastname: "lastname",
                age: 2,
                currency: Currency.USD,
                country: Country.BY,
                city: "spb",
                username: "admin",
                avatar: "https://mui.com/static/images/avatar/1.jpg",
            },
        };
        const result = validateProfileData(userValue.data);
        expect(result).toEqual([ValidetaProfileErrorCode.INCORRECT_FIRSTNAME]);
    });
});
