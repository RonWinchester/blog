import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePage.module.scss";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	ProfileCard,
	fetchProfileData,
	profileActions,
	profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { useCallback, useEffect } from "react";
import { getProfileError } from "entities/Profile/model/selector/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selector/getProfileIsLoading/getProfileIsLoading";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "entities/Profile/model/selector/getProfileReadonly/getProfileReadonly";
import { getProfileFormdata } from "entities/Profile/model/selector/getProfileFormdata/getProfileFormdata";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getValidateErrors } from "entities/Profile/model/selector/getValidateErrors/getValidateErrors";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui";
import { ValidetaProfileErrorCode } from "entities/Profile/model/types/ProfileSchema";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
	className?: string;
	children?: React.ReactNode;
}

const initialReducers: ReducerList = {
	profile: profileReducer,
};

const ProfilePage = ({
	className,
	children,
	...otherProps
}: ProfilePageProps) => {
	const { t } = useTranslation("profile");
	const data = useSelector(getProfileFormdata);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const errors = useSelector(getValidateErrors);


	const dispatch = useAppDispatch();

	const validateErrorsMap = {
		[ValidetaProfileErrorCode.INCORRECT_NO_DATA]: t(
			"Некорректные данные пользователя"
		),
		[ValidetaProfileErrorCode.INCORRECT_FIRSTNAME]: t(
			"Имя пользователя должно содержать не менее 2 символов"
		),
		[ValidetaProfileErrorCode.INCORRECT_LASTNAME]: t(
			"Фамилия пользователя должна содержать не менее 2 символов"
		),
		[ValidetaProfileErrorCode.INCORRECT_USERNAME]: t(
			"Имя пользователя должно содержать не менее 2 символов"
		),
		[ValidetaProfileErrorCode.INCORRECT_AGE]: t(
			"Возраст пользователя должен быть больше 10 и меньше 120"
		),
		[ValidetaProfileErrorCode.INCOORECT_SERVER_ERROR]: t("Серверная ошибка"),
	};

	const onChangeFirstName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ firstname: value || "" }));
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastname: value || "" }));
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value || "" }));
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value || "" }));
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value || "" }));
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.updateProfile({ currency }));
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.updateProfile({ country }));
		},
		[dispatch]
	);

	useEffect(() => {
		if(__PROJECT__ === "storybook") {
			return;
		}
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div
				className={classNames(style.ProfilePage, {}, [className])}
				{...otherProps}
			>
				<ProfilePageHeader />
				{errors &&
					errors.map((err) => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							text={validateErrorsMap[err]}
						/>
					))}
				<ProfileCard
					{...{
						data,
						isLoading,
						error,
						readonly,
						onChangeFirstName,
						onChangeLastName,
						onChangeCity,
						onChangeAge,
						onChangeUsername,
						onChangeAvatar,
						onChangeCurrency,
						onChangeCountry,
					}}
				/>
				{children}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
