import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfile } from "entities/Profile/model/selector/getProfile/getProfile";
// import { getProfileIsLoading } from "entities/Profile/model/selector/getProfileIsLoading/getProfileIsLoading";
// import { getProfileError } from "entities/Profile/model/getProfileError/getProfileError";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
	className?: string;
	children?: React.ReactNode;
}

export const ProfileCard = ({
	className,
	...otherProps
}: ProfileCardProps) => {
	const { t } = useTranslation("profile");

	const data = useSelector(getProfile);

	// const isLoading = useSelector(getProfileIsLoading);
	// const error = useSelector(getProfileError);

	return (
		<div className={classNames(style.ProfileCard, {}, [className])} {...otherProps}>
			<div className={style.header}>
				<Text title={t("Профиль")} />
				<Button className={style.editBtn} theme={ButtonTheme.OUTLINE}>
					{t("Редактировать")}
				</Button>
			</div>
			<div className={style.data}>
				<Input
					value={data?.firstname}
					placeholder={t("Ваше имя")}
					className={style.input}
					onChange={(e) => console.log(e)}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={style.input}
					onChange={(e) => console.log(e)}
				/>
			</div>
		</div>
	);
};
