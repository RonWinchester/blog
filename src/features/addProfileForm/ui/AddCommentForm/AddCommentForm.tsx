import { classNames } from "shared/lib/classNames/classNames";
import style from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "features/addProfileForm/model/selector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "features/addProfileForm/model/slice/addCommentFormSlice";
import { useCallback } from "react";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddCommentFormProps {
    className?: string;
    children?: React.ReactNode;
    onSendComment: (text: string) => void;
}

const reducers = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({
    className,
    children,
    onSendComment,
    ...otherProps
}: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, []);

    const onSetHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onSendComment, text, onCommentTextChange]);

    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
            <div
                className={classNames(style.AddCommentForm, {}, [className])}
                {...otherProps}
            >
                <Input
                    value={text || ""}
                    placeholder={t("Комментарий")}
                    onChange={onCommentTextChange}
                    error={error}
                />
                <Button onClick={onSetHandler} theme={ButtonTheme.OUTLINE}>
                    {t("Отправить")}
                </Button>
                {children}
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
