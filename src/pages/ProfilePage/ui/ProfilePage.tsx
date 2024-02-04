import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePageProps {
	className?: string;
	children?: React.ReactNode;
}

const initialReducers: ReducerList = {
	profile: profileReducer
}

const ProfilePage = ({
	className,
	children,
	...otherProps
}: ProfilePageProps) => {
	const { t } = useTranslation();
	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div
				className={classNames(style.ProfilePage, {}, [className])}
				{...otherProps}
			>
				{t("Профиль")}
				{children}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
