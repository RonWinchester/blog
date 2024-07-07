import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributes, memo, ReactNode } from "react";
import style from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
}

export const Card = memo(
	({ className, children, ...otherProps }: CardProps) => {
		return (
			<div className={classNames(style.Card, {}, [className])} {...otherProps}>
				{children}
			</div>
		);
	}
);
