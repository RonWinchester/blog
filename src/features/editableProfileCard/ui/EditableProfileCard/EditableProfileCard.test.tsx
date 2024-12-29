import { act, screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { profileReducer } from "features/editableProfileCard/model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { Action } from "@reduxjs/toolkit";
import { ProfileSchema } from "features/editableProfileCard/model/types/editableProfileCardSchema";
import { Reducer } from "react";
import { $api } from "shared/api/api";

beforeAll(() => {
    global.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
});

const mockData: Profile = {
    id: "1",
    username: "admin",
    age: 25,
    country: Country.RU,
    lastname: "Petrov",
    firstname: "Ivan",
    city: "Moscow",
    currency: Currency.RUB,
    avatar: "",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: mockData,
            formData: mockData,
        },
        user: {
            authData: {
                id: "1",
                username: "admin",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer as Reducer<
            ProfileSchema | undefined,
            Action<unknown>
        >,
    },
};

describe("features/EditableProfileCard", () => {
    test("Компонет рендерится", () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        expect(screen.getByTestId("EditableProfileCard")).toBeInTheDocument();
    });

    test("Компонет редактируется", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await act(async () => {
            await userEvent.click(
                screen.getByTestId("EditableProfileHeader.editBtn"),
            );
        });
        expect(
            screen.getByTestId("EditableProfileHeader.cancelBtn"),
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("EditableProfileHeader.saveBtn"),
        ).toBeInTheDocument();
    });

    test("Отмена редактирования", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await act(async () => {
            await userEvent.click(
                screen.getByTestId("EditableProfileHeader.editBtn"),
            );
        });

        await act(async () => {
            await userEvent.type(
                screen.getByTestId("ProfileCard.FirstName"),
                "User",
            );
        });
        await act(async () => {
            await userEvent.type(
                screen.getByTestId("ProfileCard.LastName"),
                "User",
            );
        });
        await act(async () => {
            await userEvent.click(
                screen.getByTestId("EditableProfileHeader.cancelBtn"),
            );
        });

        expect(screen.getByTestId("ProfileCard.FirstName")).toHaveValue("Ivan");
        expect(screen.getByTestId("ProfileCard.LastName")).toHaveValue(
            "Petrov",
        );
    });

    test("Сохранение редактирования", async () => {
        const mockPutReq = jest.spyOn($api, "put");
        ComponentRender(<EditableProfileCard id="1" />, options);
        await act(async () => {
            await userEvent.click(
                screen.getByTestId("EditableProfileHeader.editBtn"),
            );
        });
        await act(async () => {
            await userEvent.type(
                screen.getByTestId("ProfileCard.FirstName"),
                "User",
            );
        });
        await act(async () => {
            await userEvent.click(
                screen.getByTestId("EditableProfileHeader.saveBtn"),
            );
        });

        expect(mockPutReq).toHaveBeenCalled();
    });
});
