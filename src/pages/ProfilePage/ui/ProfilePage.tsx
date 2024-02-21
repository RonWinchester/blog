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
import { getProfileError } from "entities/Profile/model/getProfileError/getProfileError";
// import { getProfile } from "entities/Profile/model/selector/getProfile/getProfile";
import { getProfileIsLoading } from "entities/Profile/model/selector/getProfileIsLoading/getProfileIsLoading";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "entities/Profile/model/selector/getProfileReadonly/getProfileReadonly";
import { getProfileFormdata } from "entities/Profile/model/selector/getProfileFormdata/getProfileFormdata";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getUserAuth } from "entities/User";

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
	const data = useSelector(getProfileFormdata);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();

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

	const isAuth = useSelector(getUserAuth);
	console.log("isAuth", isAuth);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div
				className={classNames(style.ProfilePage, {}, [className])}
				{...otherProps}
			>
				<ProfilePageHeader />
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
