import { AnyAction } from "@reduxjs/toolkit";
import { getLoginState } from "features/authByUsername/model/selector/getLoginState/getLoginState";
import { loginByUsername } from "features/authByUsername/model/services/loginByUsername/loginByUsername";
import { loginActions } from "features/authByUsername/model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { TextTheme } from "shared/ui/Text/Text";
import style from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
	children?: React.ReactNode;
}

export const LoginForm = memo(function LoginForm({
	className,
	children,
	...otherProps
}: LoginFormProps) {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, isLoading, error } = useSelector(getLoginState);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(() => {
		//TODO: ниже явно проблема с redux, возможно конфликт типов
		dispatch(loginByUsername({ username, password }) as unknown as AnyAction);
	}, [dispatch, password, username]);

	return (
		<div
			className={classNames(style.LoginForm, {}, [className])}
			{...otherProps}
		>
			<Text title={t("Форма авторизации")} />
			{error && (
				<Text
					theme={TextTheme.ERROR}
					text={t("Ошибка авторизации: неверный пароль или логин")}
				/>
			)}
			<Input
				onChange={onChangeUsername}
				value={username}
				type="text"
				placeholder={t("Введите логин")}
			/>
			<Input
				onChange={onChangePassword}
				value={password}
				type="text"
				placeholder={t("Введите пароль")}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				disabled={isLoading}
				onClick={onLoginClick}
			>
				{t("Войти")}
			</Button>
			{children}
		</div>
	);
});
