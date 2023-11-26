import React, { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Input.module.scss";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
}

export const Input = memo(function Input({
	className,
	type = "text",
	placeholder,
	value,
	onChange,
	...otherProps
}: InputProps) {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};
	return (
		<input
			value={value}
			onChange={onChangeHandler}
			type={type}
			placeholder={placeholder}
			className={classNames(style.Input, {}, [className])}
			{...otherProps}
		/>
	);
});
