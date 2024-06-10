import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleTextBlockComponent.module.scss";
import { memo } from "react";
import { ArticleTextBlock } from "entities/Article/model/types/article";
import { Text } from "shared/ui";
import { TextAlign } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
	className?: string;
	children?: React.ReactNode;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
	({
		className,
		children,
		block,
		...otherProps
	}: ArticleTextBlockComponentProps) => {
		return (
			<div
				className={classNames(style.ArticleTextBlockComponent, {}, [className])}
				{...otherProps}
			>
				{block.title && (
					<Text
						align={TextAlign.LEFT}
						title={block.title}
						className={style.title}
					/>
				)}
				{block.paragraphs &&
					block.paragraphs.map((paragraph) => (
						<Text
							key={paragraph}
							text={paragraph}
							className={style.paragraph}
							align={TextAlign.LEFT}
						/>
					))}
				{children}
			</div>
		);
	}
);
