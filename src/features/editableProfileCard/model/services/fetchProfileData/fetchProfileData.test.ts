import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

jest.mock("axios");

describe("fetchProfileData.test", () => {
    const userValue = {
        data: {
            id: "1",
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

    test("fetchProfileData", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("fetchProfileData with error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
