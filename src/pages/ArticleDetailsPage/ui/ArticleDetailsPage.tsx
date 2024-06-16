import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui";
import { CommentList } from "entities/Comment";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	articleDetailsCommentReducer,
	getArticleComments,
} from "../model/slice/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";

interface ArticleDetailsPageProps {
	className?: string;
	children?: React.ReactNode;
}

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = ({
	className,
	...otherProps
}: ArticleDetailsPageProps) => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleCommentsIsLoading);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={reducers}>
			<div
				className={classNames(style.ArticleDetailsPage, {}, [className])}
				{...otherProps}
			>
				{id ? (
					<>
						<ArticleDetails id={id} />
						<Text title={t("Комментарии")} />
						<CommentList comments={comments} isLoading={isLoading} />
					</>
				) : (
					<div>{t("Статья не найдена")}</div>
				)}
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
