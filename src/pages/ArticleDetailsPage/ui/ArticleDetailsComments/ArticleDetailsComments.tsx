import { memo, Suspense, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsComments.module.scss";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addProfileForm";
import { t } from "i18next";
import { Text } from "shared/ui";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailsPage/model/selectors/comments";
import { addCommentFormArticle } from "pages/ArticleDetailsPage/model/services/addCommentForAricle/addCommentFormArticle";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleDetailsCommentsProps {
	className?: string;
	id: string;
}

export const ArticleDetailsComments = memo(
	({ className, id, ...otherProps }: ArticleDetailsCommentsProps) => {
		const dispatch = useAppDispatch();

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
			<div
				className={classNames(style.ArticleDetailsComments, {}, [className])}
				{...otherProps}
			>
				<Text title={t("Комментарии")} />
				<Suspense fallback={<Text text={t("Загрузка")} />}>
					<AddCommentForm onSendComment={onSendComment} />
				</Suspense>
				<CommentList comments={comments} isLoading={isLoading} />
			</div>
		);
	}
);
