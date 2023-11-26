import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
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

	const onChange = () => {

	}

	return (
		<div
			className={classNames(style.LoginForm, {}, [className])}
			{...otherProps}
		>
			<Input onChange={onChange} value="" type="text" placeholder={t("Введите логин")} />
			<Input onChange={onChange} value="" type="text" placeholder={t("Введите пароль")}/>
			<Button>{t("Войти")}</Button>
			{children}
		</div>
	);
};
