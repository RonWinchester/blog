import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetails.module.scss";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleSlice";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById";
import { useSelector } from "react-redux";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { PageLoader, Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { TextAlign, TextTheme } from "shared/ui/Text/Text";

interface ArticleDetailsProps {
	className?: string;
	id: string;
	children?: React.ReactNode;
}

const initalReducers: ReducerList = {
	articleDetails: articleDetailsReducer,
};

// eslint-disable-next-line react/display-name
export const ArticleDetails = memo(
	({ className, id, children, ...otherProps }: ArticleDetailsProps) => {
		const dispatch = useAppDispatch();
		const { t } = useTranslation("articles");
		const isLoading = useSelector(getArticleDetailsIsLoading);
		const data = useSelector(getArticleDetailsData);
		const error = useSelector(getArticleDetailsError);

        let content = null;

		useEffect(() => {
			if (__PROJECT__ === "storybook") {
				return;
			}
			dispatch(fetchArticleById(id));
		}, [dispatch, id]);

		if (isLoading) {
			content = (
				<div
					className={classNames(style.ProfileCard, {}, [
						className,
						style.loading,
					])}
				>
					<PageLoader />
				</div>
			);
		} else if (error) {
			content = (
				<div
					className={classNames(style.ProfileCard, {}, [
						className,
						style.error,
					])}
				>
					<Text
						theme={TextTheme.ERROR}
						align={TextAlign.CENTER}
						title={t("Статья не найдена")}
					/>
				</div>
			);
		} else {
            content = (<code>{JSON.stringify(data, null, 2)}</code>);
        }

        // TODO: стилизация карточки

		return (
			<DynamicModuleLoader reducers={initalReducers} removeAfterUnmount={true}>
				<div
					className={classNames(style.ArticleDetails, {}, [className])}
					{...otherProps}
				>
					{children}
					{content}
				</div>
			</DynamicModuleLoader>
		);
	}
);
