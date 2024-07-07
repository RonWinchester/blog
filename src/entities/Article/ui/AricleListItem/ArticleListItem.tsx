import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleListItem.module.scss";
import { memo, useCallback } from "react";
import { Article, ArticleView } from "entities/Article";
import { Avatar, Button, Card, Text } from "shared/ui";
import { EyeIcon } from "shared/assets/icons";
import { TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ButtonTheme } from "shared/ui/Button/Button";
import { TFunction } from "i18next/typescript/t";
import {
	ArticleBlockType,
	ArticleTextBlock,
} from "entities/Article/model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface AricleListItemProps {
	className?: string;
	children?: React.ReactNode;
	article: Article;
	view: ArticleView;
}

interface ArticleInfoProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

const ArticleInfoWrapper = ({ className, article, view }: ArticleInfoProps) => {
	return (
		<div
			className={classNames(style.infoWrapper, {}, [className, style[view]])}
		>
			<Text
				text={article.type.join(", ")}
				className={style.type}
				align={TextAlign.LEFT}
			/>
			<div className={style.views}>
				<Text text={article.views} />
				<EyeIcon />
			</div>
		</div>
	);
};

const GridArticle = ({
	article,
	view,
	openArticle,
}: {
	article: Article;
	view: ArticleView;
	openArticle: () => void;
}) => {
	return (
		<>
			<div className={style.imageWrapper} onClick={openArticle}>
				<img src={article.img} alt={article.title} className={style.img} />
				<Text
					text={article.createdAt}
					align={TextAlign.RIGHT}
					className={style.date}
				/>
			</div>
			<ArticleInfoWrapper article={article} view={view} />
			<Text
				align={TextAlign.CENTER}
				text={article.title}
				className={style.title}
			/>
		</>
	);
};

const ListArticle = ({
	article,
	view,
	t,
	openArticle,
}: {
	article: Article;
	view: ArticleView;
	t: TFunction<"articles", undefined>;
	openArticle: () => void;
}) => {
	const textBlock = article.blocks.find(
		(block) =>
			block.type === ArticleBlockType.TEXT && block.paragraphs.length > 0
	) as ArticleTextBlock | undefined;
	return (
		<>
			<div className={style.header}>
				<Avatar size={32} src={article.user.avatar || ""} />
				<Text text={article.user.username} className={style.username} />
				<Text text={article.createdAt} className={style.date} />
			</div>
			<Text
				size={TextSize.M}
				title={article.title}
				align={TextAlign.LEFT}
				className={style.title}
			/>
			<ArticleInfoWrapper article={article} view={view} />
			<img src={article.img} alt={article.title} className={style.img} />
			{textBlock && (
				<ArticleTextBlockComponent
					block={textBlock}
					className={style.textBlock}
				/>
			)}
			<div className={style.footer}>
				<Button theme={ButtonTheme.OUTLINE} onClick={openArticle}>
					{t("Читать далeeе")}
				</Button>
			</div>
		</>
	);
};``

export const ArticleListItem = memo(
	({
		className,
		children,
		article,
		view,
		...otherProps
	}: AricleListItemProps) => {
		const { t } = useTranslation("articles");

		const navigate = useNavigate();

		const openArticle = useCallback(() => {
			navigate(RoutePath.articles_details + article.id);
		}, [article.id, navigate]);

		return (
			<div
				className={classNames(style.AricleListItem, {}, [
					className,
					style[view],
				])}
				{...otherProps}
			>
				<Card className={style.card}>
					{view === ArticleView.GRID ? (
						<GridArticle {...{ article, view, openArticle }} />
					) : (
						<ListArticle {...{ article, view, t, openArticle }} />
					)}
				</Card>
				{children}
			</div>
		);
	}
);
