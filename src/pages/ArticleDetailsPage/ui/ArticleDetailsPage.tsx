import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Text } from "shared/ui";
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
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { AddCommentForm } from "features/addProfileForm";
import { addCommentFormArticle } from "../model/services/addCommentForAricle/addCommentFormArticle";
import { ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

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
	const navigate = useNavigate();

	const onBackToArticleList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleCommentsIsLoading);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentFormArticle(text));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={reducers}>
			<div
				className={classNames(style.ArticleDetailsPage, {}, [className])}
				{...otherProps}
			>
				{id ? (
					<>
						<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onBackToArticleList}>{t("Назад")}</Button>
						<ArticleDetails id={id} />
						<Text title={t("Комментарии")} />
						<AddCommentForm onSendComment={onSendComment} />
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
