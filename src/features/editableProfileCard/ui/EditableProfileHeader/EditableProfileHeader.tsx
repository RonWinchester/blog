import { Mods, classNames } from "shared/lib/classNames/classNames";
import style from "./EditableProfileHeader.module.scss";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "features/editableProfileCard/model/selector/getProfileReadonly/getProfileReadonly";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { profileActions, saveProfileData } from "features/editableProfileCard";
import { getProfileFormdata } from "features/editableProfileCard/model/selector/getProfileFormdata/getProfileFormdata";
import { getUserAuth } from "entities/User";

interface EditableProfileHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

export const EditableProfileHeader = ({
    className,
    ...otherProps
}: EditableProfileHeaderProps) => {
    const { t } = useTranslation("profile");

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuth);
    const profileData = useSelector(getProfileFormdata);
    const dispatch = useAppDispatch();

    const canEdit = authData?.id === profileData?.id;

    const mods: Mods = {
        [style.editing]: canEdit,
    };

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
            className={classNames(style.EditableProfileHeader, mods, [
                className,
            ])}
            {...otherProps}
        >
            <Text title={t("Профиль")} />
            {canEdit &&
                (readonly ? (
                    <Button
                        data-testid="EditableProfileHeader.editBtn"
                        className={style.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t("Редактировать")}
                    </Button>
                ) : (
                    <div className={style.buttons}>
                        <Button
                            data-testid="EditableProfileHeader.cancelBtn"
                            className={style.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t("Отменить")}
                        </Button>
                        <Button
                            data-testid="EditableProfileHeader.saveBtn"
                            className={style.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onSave}
                        >
                            {t("Сохранить")}
                        </Button>
                    </div>
                ))}
        </div>
    );
};
