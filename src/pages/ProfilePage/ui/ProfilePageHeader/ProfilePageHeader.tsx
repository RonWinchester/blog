import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePageHeader.module.scss";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "entities/Profile/model/selector/getProfileReadonly/getProfileReadonly";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { profileActions, saveProfileData } from "entities/Profile";

interface ProfilePageHeaderProps {
	className?: string;
	children?: React.ReactNode;
}

export const ProfilePageHeader = ({
	className,
	...otherProps
}: ProfilePageHeaderProps) => {
	const { t } = useTranslation("profile");

	const readonly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelUpdate());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(saveProfileData());
	}, [dispatch]);

	return (
		<div
			className={classNames(style.ProfilePageHeader, {}, [className])}
			{...otherProps}
		>
			<Text title={t("Профиль")} />
			{readonly ? (
				<Button
					className={style.editBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEdit}
				>
					{t("Редактировать")}
				</Button>
			) : (
				<div className={style.buttons}>
					<Button
						className={style.editBtn}
						theme={ButtonTheme.OUTLINE}
						onClick={onCancelEdit}
					>
						{t("Отменить")}
					</Button>
					<Button
						className={style.editBtn}
						theme={ButtonTheme.OUTLINE_RED}
						onClick={onSave}
					>
						{t("Сохранить")}
					</Button>
				</div>
			)}
		</div>
	);
};
