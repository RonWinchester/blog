import { classNames } from "shared/lib/classNames/classNames";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
	CLEAR = "clear",
	CLEAR_INVERTED = "clear_inverted",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
	S = "small",
	M = "medium",
	L = "large",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, size, disabled, ...otherProps } = props;
	return (
		<button
			className={classNames(style.button, { disabled }, [
				className,
				style[theme as keyof typeof style],
				style[size as keyof typeof style],
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};
