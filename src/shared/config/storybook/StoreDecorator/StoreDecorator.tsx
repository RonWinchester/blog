/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { profileReducer } from "features/editableProfileCard";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleSlice";
import { addCommentFormReducer } from "features/addProfileForm/model/slice/addCommentFormSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
    (StoryComponent: any) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
