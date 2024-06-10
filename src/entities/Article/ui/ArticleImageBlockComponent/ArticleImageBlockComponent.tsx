import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
	className?: string;
	children?: React.ReactNode;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
	({
		className,
		children,
		block,
		...otherProps
	}: ArticleImageBlockComponentProps) => {
		return (
			<div
				className={classNames(style.ArticleImageBlockComponent, {}, [
					className,
				])}
				{...otherProps}
			>
				<img src={block.src} alt={block.title} className={style.img} />
				{block.title && <Text size={TextSize.S} text={block.title} align={TextAlign.CENTER} />}
				{children}
			</div>
		);
	}
);
