import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import style from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
	children?: React.ReactNode;
}

export const LoginForm = ({
	className,
	children,
	...otherProps
}: LoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div
			className={classNames(style.LoginForm, {}, [className])}
			{...otherProps}
		>
			<input type="text"></input>
			<input type="text"></input>
			<Button>{t("Войти")}</Button>
			{children}
		</div>
	);
};
