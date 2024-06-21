import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleListItem.module.scss";
import { memo } from "react";
import { Article, ArticleView } from "entities/Article";

interface AricleListItemProps {
	className?: string;
	children?: React.ReactNode;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = memo(
	({
		className,
		children,
		article,
		view,
		...otherProps
	}: AricleListItemProps) => {
		return (
			<div
				className={classNames(style.AricleListItem, {}, [className, style[view]])}
				{...otherProps}
			>
				{article.title}
				{children}
			</div>
		);
	}
);
