import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleList.module.scss";
import { Article } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { Text } from "shared/ui";
import { ArticleListItem } from "../AricleListItem/ArticleListItem";
import { memo } from "react";
import { ArticleListItemSkeleton } from "../AricleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
	className?: string;
	children?: React.ReactNode;
	articles?: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	error?: string;
}

const getSkeletonList = (view: ArticleView) => {
	const list = new Array(view === ArticleView.GRID ? 6 : 3).fill(0);

	return (
		<>
			{list.map((_, index) => (
				<ArticleListItemSkeleton view={view} key={index} />
			))}
		</>
	);
};

export const ArticleList = memo(
	({
		className,
		children,
		articles,
		isLoading,
		view = ArticleView.GRID,
		error,
		...otherProps
	}: ArticleListProps) => {
		if (error) {
			return <Text text={error} />;
		}

		return (
			<div
				className={classNames(style.ArticleList, {}, [className, style[view]])}
				{...otherProps}
			>
				{articles?.map((article) => (
					<ArticleListItem key={article.id} view={view} article={article} />
				))}
				{children}
				{isLoading && getSkeletonList(view)}
			</div>
		);
	}
);
