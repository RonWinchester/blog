import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleList.module.scss";
import { Article } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { Text } from "shared/ui";
import { ArticleListItem } from "../AricleListItem/ArticleListItem";
import { memo } from "react";

interface ArticleListProps {
	className?: string;
	children?: React.ReactNode;
	articles?: Article[];
	isLoading?: boolean;
	view?: ArticleView;
}

export const ArticleList = memo(
	({
		className,
		children,
		articles,
		isLoading,
		view = ArticleView.LIST,
		...otherProps
	}: ArticleListProps) => {
		if (articles?.length === 0) {
			return <Text text="Статьи не найдены" />;
		}

		if (isLoading) {
			return <Text text="Загрузка..." />;
		}

		return (
			<div
				className={classNames(style.ArticleList, {}, [className, style[view]])}
				{...otherProps}
			>
				{articles?.map((article) => (
					<ArticleListItem
						key={article.id}
						view={view}
						article={article}
					/>
				))}
				{children}
			</div>
		);
	}
);
