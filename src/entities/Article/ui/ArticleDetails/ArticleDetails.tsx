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
import { Avatar, Skeleton, Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { TextAlign, TextTheme } from "shared/ui/Text/Text";
import { EyeIcon, CalendarIcon } from "shared/assets/icons";

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
					className={classNames(style.ArticleDetails, {}, [
						className,
						style.loading,
					])}
				>
					<Skeleton
						width={200}
						height={200}
						borderRadius={"50%"}
						className={style.avatar}
					/>
					<Skeleton width={"100%"} height={20} borderRadius={"10px"} />
					<Skeleton width={"100%"} height={20} borderRadius={"10px"} />
					<Skeleton width={"100%"} height={100} borderRadius={"10px"} />
					<Skeleton width={"100%"} height={100} borderRadius={"10px"} />
				</div>
			);
		} else if (error) {
			content = (
				<div
					className={classNames(style.ArticleDetails, {}, [
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
			content = (
				<>
					{data?.img && (
						<Avatar size={200} src={data.img} className={style.avatar} />
					)}
					<Text title={data?.title} text={data?.subtitle} />
					<div className={style.articleInfoWrapper}>
						<div className={style.articleInfo}>
							<EyeIcon className={style.icon} />
							<Text text={data?.views} className={style.views} />
						</div>
						<div className={style.articleInfo}>
							<CalendarIcon className={style.icon} />
							<Text text={data?.createdAt} className={style.date} />
						</div>
					</div>
				</>
			);
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
