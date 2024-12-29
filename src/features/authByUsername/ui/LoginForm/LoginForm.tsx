import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from "features/authByUsername/model/selector";
import { loginByUsername } from "features/authByUsername/model/services/loginByUsername/loginByUsername";
import {
    loginActions,
    loginReducer,
} from "features/authByUsername/model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { TextTheme } from "shared/ui/Text/Text";
import style from "./LoginForm.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
    children?: React.ReactNode;
}

const initalReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({
    className,
    children,
    onSuccess,
    ...otherProps
}: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        async (e: React.SyntheticEvent) => {
            e.preventDefault();
            const result = await dispatch(
                loginByUsername({ username, password }),
            );
            if (result.meta.requestStatus === "fulfilled") {
                onSuccess();
            }
        },
        [dispatch, onSuccess, password, username],
    );

    return (
        <DynamicModuleLoader
            reducers={initalReducers}
            removeAfterUnmount={true}
        >
            <form
                onSubmit={onLoginClick}
                className={classNames(style.LoginForm, {}, [className])}
                {...otherProps}
            >
                <Text title={t("Форма авторизации")} />
                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t(
                            "Ошибка авторизации: неверный пароль или логин",
                        )}
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
                <Button theme={ButtonTheme.OUTLINE} disabled={isLoading}>
                    {t("Войти")}
                </Button>
                {children}
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
