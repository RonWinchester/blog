import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePage.module.scss";
// import { useTranslation } from "react-i18next";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, profileReducer } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { useEffect } from "react";

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
	// const { t } = useTranslation("profile");

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div
				className={classNames(style.ProfilePage, {}, [className])}
				{...otherProps}
			>
				<ProfileCard />
				{children}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
