import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import style from "./EditableProfileCard.module.scss";
import { memo, useCallback } from "react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
import { getProfileError } from "features/editableProfileCard/model/selector/getProfileError/getProfileError";
import { getProfileFormdata } from "features/editableProfileCard/model/selector/getProfileFormdata/getProfileFormdata";
import { getProfileIsLoading } from "features/editableProfileCard/model/selector/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "features/editableProfileCard/model/selector/getProfileReadonly/getProfileReadonly";
import { getValidateErrors } from "features/editableProfileCard/model/selector/getValidateErrors/getValidateErrors";
import { ValidetaProfileErrorCode } from "features/editableProfileCard/model/types/editableProfileCardSchema";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { TextTheme, Text } from "shared/ui/Text/Text";
import { fetchProfileData } from "features/editableProfileCard/model/services/fetchProfileData/fetchProfileData";
import {
    profileActions,
    profileReducer,
} from "features/editableProfileCard/model/slice/profileSlice";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { EditableProfileHeader } from "../EditableProfileHeader/EditableProfileHeader";

interface EditableProfileCardProps {
    className?: string;
    children?: React.ReactNode;
    id?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileFormdata);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const errors = useSelector(getValidateErrors);

    const dispatch = useAppDispatch();

    const validateErrorsMap = {
        [ValidetaProfileErrorCode.INCORRECT_NO_DATA]: t(
            "Некорректные данные пользователя",
        ),
        [ValidetaProfileErrorCode.INCORRECT_FIRSTNAME]: t(
            "Имя пользователя должно содержать не менее 2 символов",
        ),
        [ValidetaProfileErrorCode.INCORRECT_LASTNAME]: t(
            "Фамилия пользователя должна содержать не менее 2 символов",
        ),
        [ValidetaProfileErrorCode.INCORRECT_USERNAME]: t(
            "Имя пользователя должно содержать не менее 2 символов",
        ),
        [ValidetaProfileErrorCode.INCORRECT_AGE]: t(
            "Возраст пользователя должен быть больше 10 и меньше 120",
        ),
        [ValidetaProfileErrorCode.INCOORECT_SERVER_ERROR]:
            t("Серверная ошибка"),
    };

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || "" }));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <div
                data-testid="EditableProfileCard"
                className={classNames(style.EditableProfileCard, {}, [
                    className,
                ])}
            >
                <EditableProfileHeader />
                {errors &&
                    errors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorsMap[err]}
                            data-testid="EditableProfileCard.Error"
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
            </div>
        </DynamicModuleLoader>
    );
});
