import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
	className?: string;
	children?: React.ReactNode;
}

export const ArticleCodeBlockComponent = ({
	className,
	children,
	...otherProps
}: ArticleCodeBlockComponentProps) => {
	return (
		<div
			className={classNames(style.ArticleCodeBlockComponent, {}, [className])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
