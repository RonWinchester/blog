import { classNames } from "shared/lib/classNames/classNames";
import style from "./Text.module.scss";

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

interface TextProps {
	className?: string;
	children?: React.ReactNode;
	text?: string;
	title?: string;
	theme?: TextTheme;
}

export const Text = ({
	className,
	children,
	text,
	title,
	theme = TextTheme.PRIMARY,
	...otherProps
}: TextProps) => {
	return (
		<div
			className={classNames(style.Text, { [style[theme]]: true }, [className])}
			{...otherProps}
		>
			<p className={style.title}>{title}</p>
			<p className={style.text}>{text}</p>
			{children}
		</div>
	);
};
