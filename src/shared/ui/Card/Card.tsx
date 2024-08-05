import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributes, memo, ReactNode } from "react";
import style from "./Card.module.scss";

export enum CardTheme {
	DEFAULT = "default",
	OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	theme?: CardTheme;
}

export const Card = memo(
	({ className, children, theme = CardTheme.DEFAULT, ...otherProps }: CardProps) => {
		return (
			<div className={classNames(style.Card, {}, [className, style[theme]])} {...otherProps}>
				{children}
			</div>
		);
	}
);
