import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleListItem.module.scss";
import { memo } from "react";
import { Article, ArticleView } from "entities/Article";
import { Card, Text } from "shared/ui";
import { EyeIcon } from "shared/assets/icons";
import { TextAlign } from "shared/ui/Text/Text";

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
				className={classNames(style.AricleListItem, {}, [
					className,
					style[view],
				])}
				{...otherProps}
			>
				<Card className={style.card}>
					<div className={style.imageWrapper}>
						<img src={article.img} alt={article.title} className={style.img} />
						<Text
							text={article.createdAt}
							align={TextAlign.RIGHT}
							className={style.date}
						/>
					</div>
					<div className={style.infoWrapper}>
						<Text text={article.type.join(", ")}  className={style.type} align={TextAlign.LEFT}/>
						<div className={style.views}>
							<Text text={article.views} />
							<EyeIcon />
						</div>
					</div>
					<Text align={TextAlign.CENTER} text={article.title} className={style.title} />
				</Card>
				{children}
			</div>
		);
	}
);
