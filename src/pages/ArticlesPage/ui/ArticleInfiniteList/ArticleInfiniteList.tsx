import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticles } from "pages/ArticlesPage/modal/slice/artilcePageSlice";
import {
	getArticlesPageIsLoading,
	getArticlesPageError,
	getArticlesPageView,
} from "pages/ArticlesPage/modal/selectors/articlesPageSelector";
import { initArticlesPage } from "pages/ArticlesPage/modal/services/initArticlesPage/initArticlesPage";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";

interface ArticleInfiniteListProps {
	className?: string;
	children?: React.ReactNode;
}

export const ArticleInfiniteList = memo(
	({ className, ...otherProps }: ArticleInfiniteListProps) => {
		const dispatch = useAppDispatch();

		const articles = useSelector(getArticles.selectAll);
		const isLoading = useSelector(getArticlesPageIsLoading);
		const error = useSelector(getArticlesPageError);
		const view = useSelector(getArticlesPageView);

		const [searchParams] = useSearchParams();

		useInitialEffect(() => {
			dispatch(initArticlesPage(searchParams));
		});

		return (
			<div className={classNames("", {}, [className])} {...otherProps}>
				<ArticleList {...{ articles, isLoading, view, error }} />
			</div>
		);
	}
);
