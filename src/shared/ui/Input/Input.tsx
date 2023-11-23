import { classNames } from "shared/lib/classNames/classNames";
import style from "./Input.module.scss";

interface InputProps {
	className?: string;
	children?: React.ReactNode;
}

export const Input = ({ className, children, ...otherProps }: InputProps) => {
	return (
		<div className={classNames(style.Input, {}, [className])} {...otherProps}>
			{children}
		</div>
	);
};
