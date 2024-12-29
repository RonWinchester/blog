import React, { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value: string | number | undefined;
    onChange: (value: string) => void;
    readonly?: boolean;
    error?: string;
}

export const Input = memo(function Input({
    className,
    type = "text",
    placeholder,
    value,
    onChange,
    readonly = false,
    error,
    ...otherProps
}: InputProps) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods = {
        [style.readonly]: readonly,
        [style.error]: error,
    };

    return (
        <input
            value={value}
            onChange={onChangeHandler}
            type={type}
            placeholder={placeholder}
            readOnly={readonly}
            className={classNames(style.Input, mods, [className])}
            {...otherProps}
        />
    );
});
