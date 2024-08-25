import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddCommentsFormSchema } from "features/addProfileForm";
import { LoginSchema } from "features/authByUsername";
import { ScrollSchema } from "features/scrollSave/model/types/scrollSaveSchhema";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { ArticlePageSchema } from "pages/ArticlesPage";

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	ui: ScrollSchema;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
	addCommentForm?: AddCommentsFormSchema;
	articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

interface ExtraThunkArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ExtraThunkArg;
	state: StateSchema;
}
