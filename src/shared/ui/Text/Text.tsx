import { classNames } from "shared/lib/classNames/classNames";
import style from "./Text.module.scss";

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

export enum TextAlign {
	LEFT = "left",
	CENTER = "center",
	RIGHT = "right",
}

interface TextProps {
	className?: string;
	children?: React.ReactNode;
	text?: string | number;
	title?: string;
	theme?: TextTheme;
	align?: TextAlign;
}

export const Text = ({
	className,
	children,
	text,
	title,
	theme = TextTheme.PRIMARY,
	align = TextAlign.CENTER,
	...otherProps
}: TextProps) => {

	const mods = {
		[style[theme]]: true,
		[style[align]]: true,
	}

	return (
		<div
			className={classNames(style.Text, mods, [className])}
			{...otherProps}
		>
			<p className={style.title}>{title}</p>
			<p className={style.text}>{text}</p>
			{children}
		</div>
	);
};
