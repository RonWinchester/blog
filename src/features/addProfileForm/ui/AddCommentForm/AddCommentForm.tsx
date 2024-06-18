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
import { addCommentFormActions, addCommentFormReducer } from "features/addProfileForm/model/slice/addCommentFormSlice";
import { useCallback } from "react";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { sendComment } from "features/addProfileForm/model/services/sendComment";

interface AddCommentFormProps {
	className?: string;
	children?: React.ReactNode;
}

const reducers = {
	addCommentForm: addCommentFormReducer,
}

const AddCommentForm = ({
	className,
	children,
	...otherProps
}: AddCommentFormProps) => {
	const { t } = useTranslation();
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value));
	}, []);

	const onSendComment = useCallback(() => {
		dispatch(sendComment());
	}, []);

	return (
		<DynamicModuleLoader removeAfterUnmount={true} reducers={reducers} >
			<div
				className={classNames(style.AddCommentForm, {}, [className])}
				{...otherProps}
			>
				<Input
					value={text || ""}
					placeholder={t("Комментарий")}
					onChange={onCommentTextChange}
				/>
				<Button onClick={onSendComment} theme={ButtonTheme.OUTLINE}>{t("Отправить")}</Button>
				{children}
			</div>
		</DynamicModuleLoader>
	);
};

export default AddCommentForm;