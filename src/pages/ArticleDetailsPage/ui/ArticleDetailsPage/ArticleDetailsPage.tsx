import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui";
import { CommentList } from "entities/Comment";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slice/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { AddCommentForm } from "features/addProfileForm";
import { addCommentFormArticle } from "../../model/services/addCommentForAricle/addCommentFormArticle";
import { Page } from "widgets/Page";
import { getArticleRecommendations } from "../../model/slice/articleDetailsRecommendationSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
	className?: string;
	children?: React.ReactNode;
}

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
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
		dispatch(fetchArticleRecommendations());
	});

	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleCommentsIsLoading);

	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(
		getArticleRecommendationsIsLoading
	);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentFormArticle(text));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={reducers}>
			<Page
				className={classNames(style.ArticleDetailsPage, {}, [className])}
				{...otherProps}
			>
				{id ? (
					<>
						<ArticleDetailsPageHeader />
						<ArticleDetails id={id} />
						<Text title={t("Рекомендации")} />
						<ArticleList
							className={style.recommendations}
							isLoading={recommendationsIsLoading}
							articles={recommendations}
						/>
						<Text title={t("Комментарии")} />
						<AddCommentForm onSendComment={onSendComment} />
						<CommentList comments={comments} isLoading={isLoading} />
					</>
				) : (
					<div>{t("Статья не найдена")}</div>
				)}
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
